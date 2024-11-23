import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Cn2XIybW.js","_app/immutable/chunks/disclose-version.CDVbtuGz.js","_app/immutable/chunks/runtime.C-MZPqfo.js","_app/immutable/chunks/theme.BYNKN9uc.js","_app/immutable/chunks/props.gjgQyDDz.js","_app/immutable/chunks/entry.KQygN3BP.js","_app/immutable/chunks/stores.BomnEoTb.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/0.DzKw8tKv.css","_app/immutable/assets/theme.CYX1C_vv.css"];
export const fonts = [];
