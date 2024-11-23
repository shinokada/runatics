export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BcS3BcYz.js","app":"_app/immutable/entry/app.DXQ6kmzf.js","imports":["_app/immutable/entry/start.BcS3BcYz.js","_app/immutable/chunks/entry.KQygN3BP.js","_app/immutable/chunks/runtime.C-MZPqfo.js","_app/immutable/entry/app.DXQ6kmzf.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/runtime.C-MZPqfo.js","_app/immutable/chunks/disclose-version.CDVbtuGz.js","_app/immutable/chunks/props.gjgQyDDz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
