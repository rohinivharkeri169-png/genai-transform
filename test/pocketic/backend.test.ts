import { PocketIc } from "@dfinity/pic";
import type { Principal } from "@icp-sdk/core/principal";
import { afterAll, beforeAll, expect, it } from "vitest";

import { idlFactory } from "../../src/frontend/src/declarations/backend.did.js";
import type { _SERVICE } from "../../src/frontend/src/declarations/backend.did";

const PIC_URL = process.env.POCKET_IC_URL ?? "";
const BACKEND_WASM = process.env.BACKEND_WASM ?? "";

let pic: PocketIc | undefined;
let actor: _SERVICE;
let canisterId: Principal;

beforeAll(async () => {
  pic = await PocketIc.create(PIC_URL);
  const fixture = await pic.setupCanister<_SERVICE>({ idlFactory, wasm: BACKEND_WASM });
  actor = fixture.actor;
  canisterId = fixture.canisterId;
});

afterAll(async () => {
  await pic?.tearDown();
});

it("answers an empty-state read instead of trapping", async () => {
  // The authorization scaffold starts with no admin assigned and the caller as
  // a guest.
  await expect(actor.getCallerUserRole()).resolves.toEqual({ guest: null });
  await expect(actor.isCallerAdmin()).resolves.toBe(false);
});

it("exposes the schema without trapping", async () => {
  await expect(actor.schema()).resolves.toBeTypeOf("string");
});

it("round-trips a caller role assignment through the real canister", async () => {
  // Use the canister's own principal as a concrete caller identity. The
  // anonymous principal is not directly constructible here without an extra
  // runtime dependency, and it can never be an admin (initialize() returns
  // early for anonymous callers), so register the canister principal as the
  // first (admin) caller before assigning a role.
  actor.setPrincipal(canisterId);
  await expect(actor._initialize_access_control()).resolves.toBeNull();
  await expect(actor.assignCallerUserRole(canisterId, { admin: null })).resolves.toBeNull();
  await expect(actor.getCallerUserRole()).resolves.toEqual({ admin: null });
  await expect(actor.isCallerAdmin()).resolves.toBe(true);
});

it("initializes access control without trapping", async () => {
  await expect(actor._initialize_access_control()).resolves.toBeNull();
});

it("starts an internet identity sign-in without trapping", async () => {
  const challenge = await actor._internet_identity_sign_in_start();
  expect(challenge).toBeInstanceOf(Uint8Array);
});
