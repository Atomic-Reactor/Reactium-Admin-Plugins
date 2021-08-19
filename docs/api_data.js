define({ "api": [
  {
    "type": "Hook",
    "url": "blueprint-load",
    "title": "blueprint-load",
    "description": "<p>This hook is run whenever a route is loaded that matches the blueprint component. Implementing this hook will give you an opportunity to load data for your blueprint components. Also if you wish, you can set the data property on your hook's context to get that data spread into each of your blueprint children.</p>",
    "name": "blueprint-load",
    "group": "Actinium-Admin.Hooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>includes: - params: object of route params - search: object of url search query - route: the route object - config: the route configuration (includes capabilities) - blueprint: the loading blueprint schema - dispatch: Redux dispatch function, in case you wish to dispatch after data loading - getState: Redux getState function, in case you need Redux state context in your data loading</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example.js",
        "content": "import Reactium from 'reactium-core/sdk';\n\nReactium.Hook.register('blueprint-load', async (params, context) => {\n    try {\n        context.data = await Reactium.Cloud.run('my-data-loader');\n    } catch(error) {\n        context.data = { error };\n    }\n});",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Blueprint/actions.js",
    "groupTitle": "Actinium-Admin.Hooks"
  },
  {
    "type": "Hook",
    "url": "default-blueprint",
    "title": "default-blueprint",
    "description": "<p>Hook defining default blueprint configuration if none has been provided that matches the current routes' blueprint id.</p>",
    "name": "default-blueprint",
    "group": "Actinium-Admin.Hooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "defaultBlueprint",
            "description": "<p>The default blueprint object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Blueprint/reactium-hooks.js",
    "groupTitle": "Actinium-Admin.Hooks"
  },
  {
    "type": "Asynchronous",
    "url": "Content.unschedule(params,handle)",
    "title": "Content.unschedule()",
    "description": "<p>Remove scheduled publishing job by id.</p>",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jobId",
            "description": "<p>The id of the schedule job.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ]
      }
    },
    "name": "Content.unschedule",
    "group": "Actinium",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Actinium"
  },
  {
    "type": "Asynchronous",
    "url": "Content.cloneBranch(params,handle)",
    "title": "Content.cloneBranch()",
    "description": "<p>Clone a branch / specific revision as a new branch.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": false,
            "field": "branchLabel",
            "description": "<p>New branch label.</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "current",
            "defaultValue": "false",
            "description": "<p>When true, get the currently committed content (not from revision system). otherwise, construct the content from the provided history (branch and revision index).</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          }
        ]
      }
    },
    "name": "Content.cloneBranch",
    "group": "Cloud",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Cloud"
  },
  {
    "type": "Asynchronous",
    "url": "Content.deleteBranch(params,options)",
    "title": "Content.deleteBranch()",
    "description": "<p>Delete a branch and mark its revisions for deletion. Note that although the 'master' branch is the default, you may not delete the master branch.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          }
        ]
      }
    },
    "name": "Content.deleteBranch()",
    "group": "Cloud",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Cloud"
  },
  {
    "type": "Hook",
    "url": "Hooks",
    "title": "Hooks",
    "name": "Hooks",
    "description": "<p>Here are the standard hooks that fire (in order) on the bootstrap of your Reactium application.</p> <table> <thead> <tr> <th style=\"text-align:left\">Hook</th> <th style=\"text-align:left\">Description</th> </tr> </thead> <tbody> <tr> <td style=\"text-align:left\">init</td> <td style=\"text-align:left\">Called before all other hooks on startup.</td> </tr> <tr> <td style=\"text-align:left\">dependencies-load</td> <td style=\"text-align:left\">Called while application dependencies are loaded.</td> </tr> <tr> <td style=\"text-align:left\">service-worker-init</td> <td style=\"text-align:left\">Called while service worker is loaded.</td> </tr> <tr> <td style=\"text-align:left\">zone-defaults</td> <td style=\"text-align:left\">Called while rendering zone default components are loaded.</td> </tr> <tr> <td style=\"text-align:left\">store-create</td> <td style=\"text-align:left\">Called while Redux store is being created.</td> </tr> <tr> <td style=\"text-align:left\">store-created</td> <td style=\"text-align:left\">Called after Redux store is created.</td> </tr> <tr> <td style=\"text-align:left\">plugin-dependencies</td> <td style=\"text-align:left\">Called before loading runtime plugins.</td> </tr> <tr> <td style=\"text-align:left\">plugin-init</td> <td style=\"text-align:left\">Called to initiate plugin registration.</td> </tr> <tr> <td style=\"text-align:left\">routes-init</td> <td style=\"text-align:left\">Called to initiaze React router</td> </tr> <tr> <td style=\"text-align:left\">register-route</td> <td style=\"text-align:left\">Called for each route that is registered</td> </tr> <tr> <td style=\"text-align:left\">data-loaded</td> <td style=\"text-align:left\">Called on route load to pre-load data</td> </tr> <tr> <td style=\"text-align:left\">plugin-ready</td> <td style=\"text-align:left\">Called after all plugins registration callbacks have completed</td> </tr> <tr> <td style=\"text-align:left\">component-bindings</td> <td style=\"text-align:left\">Called to sibling React components and their DOM element bindings</td> </tr> <tr> <td style=\"text-align:left\">app-bindpoint</td> <td style=\"text-align:left\">Called to define the main application bind point.</td> </tr> <tr> <td style=\"text-align:left\">app-redux-provider</td> <td style=\"text-align:left\">Called to define the Redux provider component</td> </tr> <tr> <td style=\"text-align:left\">app-router</td> <td style=\"text-align:left\">Called to provide the React router component</td> </tr> <tr> <td style=\"text-align:left\">app-ssr-mode</td> <td style=\"text-align:left\">Called to make the application aware of server-side rendering mode</td> </tr> <tr> <td style=\"text-align:left\">app-boot-message</td> <td style=\"text-align:left\">Called to define the javascript console boot message</td> </tr> <tr> <td style=\"text-align:left\">app-ready</td> <td style=\"text-align:left\">Called when the application is being bound or hydrated by ReactDOM</td> </tr> </tbody> </table>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/reactium-hooks.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.AppBindings",
    "title": "Server.AppBindings",
    "name": "Server.AppBindings",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Defines React bind pointes in markup.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AppBindings",
            "description": "<p>Server app binding registry object.</p>"
          }
        ],
        "binding": [
          {
            "group": "binding",
            "type": "String",
            "optional": true,
            "field": "component",
            "description": "<p>string name of component to bind directly if possible (must be in a webpack search context in reactium-config)</p>"
          },
          {
            "group": "binding",
            "type": "String",
            "optional": true,
            "field": "markup",
            "description": "<p>ordinary markup that React will use to bind the app.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "ReactiumBoot.Hook.registerSync(\n    'Server.AppBindings',\n    (req, AppBindings) => {\n        // Find the registered component \"DevTools\" and bind it\n        AppBindings.register('DevTools', {\n            component: 'DevTools',\n        });\n\n        // Add ordinary markup for React to bind to\n        AppBindings.register('router', {\n            markup: '<div id=\"router\"></div>',\n        });\n    },\n    ReactiumBoot.Enums.priority.highest,\n    'SERVER-APP-BINDINGS-CORE',\n);",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.AppGlobals",
    "title": "Server.AppGlobals",
    "name": "Server.AppGlobals",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Defines window globals to be defined in template. Will also define global for nodejs (useful for Server-Side-Rendering).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AppGlobals",
            "description": "<p>Server app globals registry object.</p>"
          }
        ],
        "global": [
          {
            "group": "global",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The property name that will be added to window (for browser) or global (for nodejs).</p>"
          },
          {
            "group": "global",
            "type": "Mixed",
            "optional": false,
            "field": "value",
            "description": "<p>any javascript value that can be serialized for use in a script tag</p>"
          },
          {
            "group": "global",
            "type": "Mixed",
            "optional": true,
            "field": "serverValue",
            "description": "<p>optional different value for the server global, useful when value should be used differently on the server code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "// will result in window.environment = 'local' in browser and global.environment = 'local' on nodejs\nReactiumBoot.Hook.registerSync(\n    'Server.AppGlobals',\n    (req, AppGlobals) => {\n        // Find the registered component \"DevTools\" and bind it\n        AppGlobals.register('environment', {\n            name: 'environment',\n            value: 'local',\n        });\n    });",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.AppHeaders",
    "title": "Server.AppHeaders",
    "name": "Server.AppHeaders",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Defines html head tags (exluding stylesheet). Use this hook to register/unregister <head> tags as strings. Note: if using Server Side Render and react-helmet, this is often unnecessary to do.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AppHeaders",
            "description": "<p>Server app header registry object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "ReactiumBoot.Hook.register('Server.AppHeaders', async (req, AppHeaders) => {\n   // given some data was added to req by express middleware\n   const seo = req.seo;\n   if (seo) {\n       if (seo.canonicalURL) {\n           AppHeaders.register('canonical-url', {\n               header: `<link rel=\"canonical\" href=\"${seo.canonicalURL}\" />`\n           });\n       }\n       if (seo.description) {\n           AppHeaders.register('meta-description', {\n               header: `<meta name=\"description\" content=\"${seo.description}\"/>`\n           });\n       }\n   }\n});",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.AppScripts",
    "title": "Server.AppScripts",
    "name": "Server.AppScripts",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Defines javascript files to be loaded.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AppScripts",
            "description": "<p>Server app scripts registry object.</p>"
          }
        ],
        "script": [
          {
            "group": "script",
            "type": "Boolean",
            "optional": true,
            "field": "footer",
            "defaultValue": "true",
            "description": "<p>Place the script tag in the footer if true</p>"
          },
          {
            "group": "script",
            "type": "Boolean",
            "optional": true,
            "field": "header",
            "defaultValue": "false",
            "description": "<p>Place the script tag above the body if true</p>"
          },
          {
            "group": "script",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>the src of the javascript</p>"
          },
          {
            "group": "script",
            "type": "String",
            "optional": true,
            "field": "charset",
            "defaultValue": "UTF-8",
            "description": "<p>charset attribute</p>"
          },
          {
            "group": "script",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>type attribute</p>"
          },
          {
            "group": "script",
            "type": "Boolean",
            "optional": true,
            "field": "defer",
            "defaultValue": "false",
            "description": "<p>Add defer attribute</p>"
          },
          {
            "group": "script",
            "type": "Boolean",
            "optional": true,
            "field": "async",
            "defaultValue": "false",
            "description": "<p>Add async attribute</p>"
          },
          {
            "group": "script",
            "type": "Boolean",
            "optional": true,
            "field": "content",
            "description": "<p>script content</p>"
          },
          {
            "group": "script",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "0",
            "description": "<p>loading order of script</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "ReactiumBoot.Hook.register('Server.AppScripts', async (req, AppScripts) => {\n    AppScripts.register('my-onsite-script', {\n        path: '/assets/js/some-additional.js'\n        footer: true, // load in footer (optional)\n        header: false, // don't load in header (optional)\n        order: 1, // scripts will be ordered by this\n    });\n\n    AppScripts.register('my-csn-script', {\n        path: 'https://cdn.example.com/cdn.loaded.js'\n        header: true, // maybe for an external\n        order: 1, // scripts will be ordered by this\n    });\n});",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.AppSnippets",
    "title": "Server.AppSnippets",
    "name": "Server.AppSnippets",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Defines snippets of code to be added to document in their entirety.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AppSnippets",
            "description": "<p>Server app snippets registry object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "     ReactiumBoot.Hook.register('Server.AppSnippets', async (req, AppSnippets) => {\n        AppSnippets.register('ga-tracking', {\n            snippet: `<script>\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', '', 'auto');\nga('send', 'pageview');\n</script>`,\n          order: 1,\n        })\n     });",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.AppStyleSheets",
    "title": "Server.AppStyleSheets",
    "name": "Server.AppStyleSheets",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Defines css files to be loaded.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "AppStyleSheets",
            "description": "<p>Server app styles registry object.</p>"
          }
        ],
        "stylesheet": [
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>the src of the javascript</p>"
          },
          {
            "group": "stylesheet",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "0",
            "description": "<p>loading order of script</p>"
          },
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "rel",
            "defaultValue": "stylesheet",
            "description": "<p>the rel attribute</p>"
          },
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "crossorigin",
            "description": "<p>the crossorigin attribute</p>"
          },
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "referrerpolicy",
            "description": "<p>the referrerpolicy attribute</p>"
          },
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "hrefLang",
            "description": "<p>the hreflang attribute</p>"
          },
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "sizes",
            "description": "<p>the sizes attribute if rel=icon</p>"
          },
          {
            "group": "stylesheet",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>the type attribute</p>"
          },
          {
            "group": "stylesheet",
            "type": "Function",
            "optional": true,
            "field": "when",
            "description": "<p>callback passed the request object, and returns true or false if the css should be included</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "ReactiumBoot.Hook.register('Server.AppStyleSheets', async (req, AppStyleSheets) => {\n    AppStyleSheets.register('my-stylesheet', {\n        path: '/assets/css/some-additional.css'\n    });\n\n    AppStyleSheets.register('my-csn-script', {\n        path: 'https://cdn.example.com/cdn.loaded.css'\n        order: 1, // scripts will be ordered by this\n    });\n});",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.Middleware",
    "title": "Server.Middleware",
    "name": "Server.Middleware",
    "description": "<p>Used to register or unregister express middleware.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Middleware",
            "description": "<p>Server express middleware registry object.</p>"
          }
        ],
        "middleware": [
          {
            "group": "middleware",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the middleware.</p>"
          }
        ],
        "middlware": [
          {
            "group": "middlware",
            "type": "Function",
            "optional": false,
            "field": "use",
            "description": "<p>the express middleware function.</p>"
          },
          {
            "group": "middlware",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>the loading order of the middleware</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-boot.js",
        "content": "const express = require('express');\nconst router = express.Router();\nconst axios = require('axios');\n\n// register a new backend route /foo with express\nrouter.get('/', (req, res) => {\n   res.send('Foo!!')\n});\n\nReactiumBoot.Hook.registerSync('Server.Middleware', Middleware => {\n   Middleware.register('foo-page', {\n       name: 'foo-page',\n       use: router,\n       order: ReactiumBoot.Enums.priority.highest,\n   })\n});\n\nReactiumBoot.Hook.registerSync('Server.Middleware', Middleware => {\n   const intercept = express.Router();\n   intercept.post('/api*', (req, res) => {\n       res.json({\n           foo: 'bar'\n       });\n   });\n\n   // check api health every 90 seconds and intercept api if it goes down\n   Middleware.register('downapi', {\n       name: 'downapi',\n       use: async (res, req, next) => {\n           try {\n               let healthy = ReactiumBoot.Cache.get('health-check');\n               if (healthy === undefined) {\n                   const response = await axios.get(process.env.REST_API_URI + '/healthcheck');\n                   healthy = response.data;\n                   ReactiumBoot.Cache.set('health-check', healthy, 1000 * 90);\n               }\n           } catch (error) {\n               console.error(error);\n               ReactiumBoot.Cache.set('health-check', false, 1000 * 90);\n               healthy = false;\n           }\n\n           if (healthy === true) next();\n           return intercept(req, req, next);\n       },\n       order: ReactiumBoot.Enums.priority.highest,\n   })\n});",
        "type": "json"
      }
    ],
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.ResponseHeaders",
    "title": "Server.ResponseHeaders",
    "name": "Server.ResponseHeaders",
    "description": "<p>On html template responses on server, this hook is called when HTTP headers are added to the response. Both sync and async hook is called.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "responseHeaders",
            "description": "<p>object with key pairs (header name =&gt; header value)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>Node/Express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>Node/Express response object</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/router.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.ServiceWorkerAllowed",
    "title": "Server.ServiceWorkerAllowed",
    "description": "<p>Called on server-side during service-worker-allowed middleware. Used to define the HTTP response header &quot;Service-Worker-Allowed&quot;. By default, this header will allow the document root, &quot;/&quot;. Both sync and async version called.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "responseHeader",
            "description": "<p>with property 'Service-Worker-Allowed' (case sensitive) and its value.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>Node/Express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "res",
            "description": "<p>Node/Express response object</p>"
          }
        ]
      }
    },
    "name": "Server.ServiceWorkerAllowed",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.afterApp",
    "title": "Server.afterApp",
    "name": "Server.afterApp",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Called after other Server hooks.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Server",
            "description": "<p>ReactiumBoot Server object.</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "Server.beforeApp",
    "title": "Server.beforeApp",
    "name": "Server.beforeApp",
    "description": "<p>Before index.html template render for SPA template (both Front-end and Server-Side Render). Called before other Server hooks.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "req",
            "description": "<p>express request object</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Server",
            "description": "<p>ReactiumBoot Server object.</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/server/renderer/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "app-bindpoint",
    "title": "app-bindpoint",
    "name": "app-bindpoint",
    "description": "<p>Called after plugin and routing initialization to define the DOM element used for mounting the Single-Page application (SPA). By default, the application will bind to <code>document.getElementById('router')</code>, but this can be changed with this hook. This is related to the HTML template artifacts left by the server-side <code>Server.AppBindings</code> hook. async only - used in front-end application only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>context.appElement MUST be an HTMLElement where your React appliation will bind to the DOM.</p>"
          }
        ],
        "appElement": [
          {
            "group": "appElement",
            "type": "HTMLElement",
            "optional": false,
            "field": "the",
            "description": "<p>DOM element to bind to - by default <code>document.getElementById('router')</code>.</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "app-boot-message",
    "title": "app-boot-message",
    "name": "app-boot-message",
    "description": "<p>Called during application binding, this minor hook will allow you to change the format of the of the front-end Javascript console message indicating application start. async only - used in front-end application only</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "app-ready",
    "title": "app-ready",
    "description": "<p>The final hook run after the front-end application has bee bound or hydrated. After this point, the all hooks are runtime hooks.</p>",
    "name": "app-ready",
    "group": "Hooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ssr",
            "description": "<p>If the app is in server-side rendering mode (SSR) <code>true</code> is passed to the hook.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "app-redux-provider",
    "title": "app-redux-provider",
    "name": "app-redux-provider",
    "description": "<p>Called after app-bindpoint to define the registered Redux Provider component (i.e. <code>Reactium.Component.register('ReduxProvider'...)</code>) for all bind points and the SPA. async only - used in front-end application only</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "app-router",
    "title": "app-router",
    "name": "app-router",
    "description": "<p>Called after app-redux-provider to define the registered Router component (i.e. <code>Reactium.Component.register('Router'...)</code>). After this hook, the ReactDOM bindings will actually take place. async only - used in front-end application only</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "component-bindings",
    "title": "component-bindings",
    "name": "component-bindings",
    "description": "<p>Called after plugin and routing initialization to define element and dynamic component for one-off component bindings to the DOM. e.g. In development mode, used to render Redux Dev tools. async only - used in front-end application only</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>context.bindPoints MUST be an array of binding objects after this hook is called</p>"
          }
        ],
        "binding": [
          {
            "group": "binding",
            "type": "HTMLElement",
            "optional": false,
            "field": "the",
            "description": "<p>DOM element to bind to (e.g. document.getElementById('my-element'))</p>"
          },
          {
            "group": "binding",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>matching a React component module in one of the Reactium built-in webpack contexts (src/app/components or src/app/components/common-ui) e.g. 'DevTools' maps to src/app/components/DevTools</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "dependencies-load",
    "title": "dependencies-load",
    "name": "dependencies-load",
    "description": "<p>Called after init to give an application a change to load async dependencies. Many Domain Driven Design (DDD) artifacts from generated src/manifest.js are loaded on this hook async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "dependencies-load",
    "title": "dependencies-load",
    "name": "dependencies-load",
    "description": "<p>Called after init to give an application a change to load async dependencies. Many Domain Driven Design (DDD) artifacts from generated src/manifest.js are loaded on this hook async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/reactium-hooks.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "init",
    "title": "init",
    "name": "init",
    "description": "<p>Called before all other hooks on Reactium application startup. async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "plugin-dependencies",
    "title": "plugin-dependencies",
    "name": "plugin-dependencies",
    "description": "<p>Called to indicate all bootstrap dependencies should now be loaded, but before application routes have been initialized. There are 2 default registered callback in Reactium core on this hook. 1. (Highest Priority): The generated src/manifest.js dependencies are attached to this hook context (as context.deps). 2. (High Priority): <code>plugin-init</code> hook will be invoked, at which point all Reactium.Plugin registrations will be called.</p> <pre><code> Any hooks that registered after Reactium.Plugin will only be useful if they happen to be invoked during the normal runtime operations of the application.  An important exception to this is `routes-init`, which is deferred until after plugins initialize so they may dynamically add routes before Reactium hands off  control to the Router.  async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>Core attaches generated manifest loaded dependencies to context.deps</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "plugin-ready",
    "title": "plugin-ready",
    "name": "plugin-ready",
    "description": "<p>Called after all plugin registration callbacks have completed and routes have loaded.</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "register-route",
    "title": "register-route",
    "name": "register-route",
    "description": "<p>Called on boot after routes-init, and during runtime operation of the front-end application, whenever a new route is registered. Can be used to augment a router object before it is registered to the router. async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "route",
            "description": "<p>the new or updated route, indentified by unique id (route.id)</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/sdk/routing/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "routes-init",
    "title": "routes-init",
    "name": "routes-init",
    "description": "<p>Called after plugin-init, to add React Router routes to Reactium.Routing register before the Router component is initialized and finally the application is bound to the DOM. async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/sdk/routing/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "store-create",
    "title": "store-create",
    "name": "store-create",
    "description": "<p>Called after dependencies-load to trigger Redux store creator. async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>params.server indicate if is store creation on the server, or in the front-end application</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>Core implementation of this hook will create the Redux store and set it to context.store.</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "Hook",
    "url": "zone-defaults",
    "title": "zone-defaults",
    "name": "zone-defaults",
    "description": "<p>Called after dependencies-load by Reactium.Zone.init() for loading default component rendering Zone controls and components. async only - used in front-end or isomorphically when running server-side rendering mode (SSR)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>used to create initial controls and components. controls.filter for default filtering, controls.sort for default sorting, controls.mapper for default mapping and controls.components for initial registered components. zone.js Domain Driven Design (DDD) artifacts from generated src/manifest.js are registered with Reactium.Zone at this time. See Reactium.Zone SDK for runtime operations.</p>"
          }
        ]
      }
    },
    "group": "Hooks",
    "version": "0.0.0",
    "filename": ".core/app/index.js",
    "groupTitle": "Hooks"
  },
  {
    "type": "ReactHook",
    "url": "useAsyncEffect(cb,dependencies)",
    "title": "useAsyncEffect()",
    "description": "<p>Just like React's built-in <code>useEffect</code>, but can use async/await. If the return is a promise for a function, the function will be used as the unmount callback.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "cb",
            "description": "<p>Just like callback provided as first argument of <code>useEffect</code>, but takes as its own first argument a method to see if the component is mounted. This is useful for deciding if your async response (i.e. one that would attempt to change state) should happen.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "deps",
            "description": "<p>Deps list passed to <code>useEffect</code></p>"
          }
        ]
      }
    },
    "name": "useAsyncEffect",
    "group": "ReactHook",
    "examples": [
      {
        "title": "Reactium Usage",
        "content": "import React, { useState } from 'react';\nimport { useAsyncEffect } from 'reactium-core/sdk';\n\nconst MyComponent = props => {\n    const [show, setShow] = useState(false);\n\n    // change state allowing value to show\n    // asynchrounously, but only if component is still mounted\n    useAsyncEffect(async isMounted => {\n        setShow(false);\n        await new Promise(resolve => setTimeout(resolve, 3000));\n        if (isMounted()) setShow(true);\n\n        // unmount callback\n        return () => {};\n    }, [ props.value ]);\n\n    return (\n        {show && <div>{props.value}</div>}\n    );\n};",
        "type": "json"
      },
      {
        "title": "StandAlone Import",
        "content": "import { useAsyncEffect } from '@atomic-reactor/reactium-sdk-core';",
        "type": "json"
      },
      {
        "title": "Wrong Usage",
        "content": "import React, { useState } from 'react';\nimport { useAsyncEffect } from 'reactium-core/sdk';\n\nconst MyComponent = props => {\n    const [show, setShow] = useState(false);\n\n    // change state allowing value to show\n    // asynchrounously, but only if component is still mounted\n    useAsyncEffect(async isMounted => {\n        // Warning: don't do this, wait until promise resolves to check isMounted()!!\n        if (isMounted()) { // this may be true *before* promise resolves and false *after*\n            setShow(false);\n            await new Promise(resolve => setTimeout(resolve, 3000));\n            setShow(true);\n        }\n\n        // unmount callback\n        return () => {};\n    }, [ props.value ]);\n\n    return (\n        {show && <div>{props.value}</div>}\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/async-effect.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useAvatar(user)",
    "title": "useAvatar()",
    "description": "<p>React Hook that gets the avatar or default avatar of the supplied user.</p>",
    "name": "useAvatar",
    "group": "ReactHook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "user",
            "description": "<p>The user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/User/useAvatar.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useBreakpoint(width)",
    "title": "useBreakpoint()",
    "description": "<p>Returns string representing the breakpoint size for a given width.</p> <p>When using the out of the box scss styles in Reactium, a grid system is in place, and is defined by an overridable sass map <code>$breakpoints-max</code>, defined by default as:</p> <pre class=\"prettyprint\">$breakpoints-max: ('xs': 640, 'sm': 990, 'md': 1280, 'lg': 1440,'xl': 1600) !default; </code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "width",
            "description": "<p>the width to check the breakpoint for. Example for the default <code>$breakpoints-max</code> providing a width of 640 or less will return <code>xs</code>, 990 or less will return <code>sm</code> and so on.</p>"
          }
        ]
      }
    },
    "name": "useBreakpoint",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/window.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useBreakpoints()",
    "title": "useBreakpoints()",
    "description": "<p>Provides an object describing the maximum width for each breakpoint used in the Reactium grid styles. When using the out of the box scss styles in Reactium, a grid system is in place, and is defined by an overridable sass map <code>$breakpoints-max</code>, defined by default as:</p> <pre class=\"prettyprint\">$breakpoints-max: ('xs': 640, 'sm': 990, 'md': 1280, 'lg': 1440,'xl': 1600) !default; </code></pre> <p>These breakpoint maximums are automatically encoded and added to the stylesheet as <code>:after</code> psuedo-element <code>content</code> property, which can be loaded in the browser and used for in browser responsive behavior. Potentially, this can mean only having to manage your responsive breakpoints in one place (the stylesheet).</p>",
    "name": "useBreakpoints",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/window.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useCapability(capability)",
    "title": "useCapability()",
    "description": "<p>React hook to get capability object.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capability",
            "description": "<p>the name/tag of the capability</p>"
          }
        ]
      }
    },
    "name": "useCapability",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/capability.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useCapabilityCheck(capabilities,strict)",
    "title": "useCapabilityCheck()",
    "description": "<p>React hook to check a list of capabilities. Uses Reactium.Capability.check().</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capabilities",
            "description": "<p>array of 1 or more capabilities</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "strict",
            "defaultValue": "true",
            "description": "<p>when true all capabilities must be allowed for current user</p>"
          }
        ]
      }
    },
    "name": "useCapabilityCheck",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/capability.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useCapabilitySettings(id,defaultCapabilities)",
    "title": "useCapabilitySettings()",
    "version": "3.2.1",
    "name": "useCapabilitySettings",
    "group": "ReactHook",
    "description": "<p>React hook that async combines capability settings from a Reactium hook based on the zone parameter and the Registry Object zone value.</p> <p>Returns the capabilities array and a setter function.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>The Capability Setting zone. The zone value will be appended with <code>-capabilities</code> to create a Reactium async/sync hook.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "defaultCapabilities",
            "description": "<p>Array of Capability Setting objects that will be auto registered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "dependencies",
            "description": "<p>Array of values that will cause a reload of the capabilities. Default: <code>[defaultCapabilities]</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "import React from 'react';\nimport Reactium from 'reactium-core/sdk';\n\nconst CapabilityList = ({ zone = 'my-zone' }) => {\n    // Run the 'my-zone-capabilities' hook which allows plugins to auto register a Regsitry Object.\n    const { useCapabilitySettings } = Reactium;\n    const [capabilities] = useCapabilitySettings(zone);\n\n    // Render a list\n    return (\n        <ul>\n            {capabilities.map(({ capability, title, tooltip }) => (\n                <li key={capability} data-tooltip={tooltip}>\n                    {capability} - {title}\n                </li>\n            ))}\n        </ul>\n    );\n};",
        "type": "json"
      }
    ],
    "filename": "src/app/components/Admin/Settings/AppSettings/useCapabilitySettings.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useDerivedState(props,subscriptions,updateAll)",
    "title": "useDerivedState()",
    "description": "<p>Sometimes you would like to derive state from your component props, and also allow either a prop change, or an internal state change either to take effect. This hook will allow you to create a state object from your component props, and subscribe (by array of object-paths) only to those prop changes you would like to see reflected in a rendering updates to your component state. This hook returns an array similar in nature to the return of React's built-in <code>useState()</code> hook (<code>[state,setState]</code>), with some differences.</p> <ol> <li>The initial value coming from props (on first render) will contain all that was present in the props object passed to it. Note that any values that are not present in your component props on first render, or that which are explicitly subscribed to, will not exist in the returned state element.</li> <li>The setState callback can receive whole or partial state objects, and will be merged with the existing state.</li> <li>There is a third element function <code>forceRefresh</code></li> </ol>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "props",
            "description": "<p>the component props</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "subscriptions",
            "description": "<p>Array of string object-paths in your component props you would like to update your component state for. By default, this is empty, and if left empty you will get only the initial props, and no updates. Each selected property is shallow compared with the previous version of that prop (not the current state). Only a change of prop will trigger a prop-based update and rerender.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "updateAll",
            "defaultValue": "false",
            "description": "<p>When true, an update to any subscribed object-path on your props will cause <em>all</em> the props to imprint on your component state.</p>"
          }
        ]
      }
    },
    "version": "0.0.14",
    "name": "useDerivedState",
    "group": "ReactHook",
    "examples": [
      {
        "title": "Returns",
        "content": "// The hook returns an array containing [state, setState, forceRefresh]\nconst [state, setState, forceRefresh] = useDerivedState(props, ['path.to.value1', 'path.to.value2']);",
        "type": "json"
      },
      {
        "title": "Usage",
        "content": "import React from 'react';\nimport { useDerivedState } from 'reactium-core/sdk';\nimport op from 'object-path';\n\nconst MyComponent = props => {\n    const [state, setState] = useDerivedState(props, ['path.to.value1', 'path.to.value2']);\n    const value1 = op.get(state, 'path.to.value1', 'Default value 1');\n    const value2 = op.get(state, 'path.to.value2', 'Default value 2');\n\n    // setState merges this object with previous state\n    const updateValue1 = () => setState({\n        path: {\n            to: {\n                value1: 'foo',\n            }\n        }\n    });\n\n    return (<div>\n        <div>Value 1: {value1}</div>\n        <div>Value 2: {value2}</div>\n        <button onClick={updateValue1}>Update Value 1</button>\n    </div>);\n}\n\nexport default MyComponent;",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/derived-state.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useDocument()",
    "title": "useDocument()",
    "description": "<p>Serves same use-case as <code>useWindow()</code>, but provides context aware <code>document</code> object or <code>undefined</code>, that can be used normally as well as in the <code>react-frame-component</code> within the toolkit.</p>",
    "name": "useDocument",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/window.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useEventEffect(eventTarget,eventCallbacks,deps)",
    "title": "useEventEffect()",
    "version": "1.0.7",
    "description": "<p>React hook to short hand for addEventListener and removeEventLister for one or more callbacks.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eventTarget",
            "description": "<p>Some event target object (implementing addEventListener and removeEventLister)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "eventCallbacks",
            "description": "<p>Object keys are event names, and Object values are callbacks to be subscribed/unsubscribed.</p>"
          },
          {
            "group": "Parameter",
            "type": "useEffectDeps",
            "optional": false,
            "field": "deps",
            "description": "<p>consistent with React useEffect deps list.</p>"
          }
        ]
      }
    },
    "name": "useEventEffect",
    "group": "ReactHook",
    "examples": [
      {
        "title": "EventEffectComponent.js",
        "content": "import React, { useState } from 'react';\nimport { useEventEffect } from 'reactium-core/sdk';\n\nconst EventEffectComponent = () => {\n    const [size, setSize] = useState({\n        width: window.innerWidth,\n        height: window.innerHeight,\n    });\n\n    const [online, setOnline] = useState(window.onLine);\n\n    const onResize = e => {\n        setSize({\n            width: window.innerWidth,\n            height: window.innerHeight,\n        });\n    };\n\n    const onNetworkChange = e => {\n        setOnline(window.onLine);\n    };\n\n    useEventEffect(\n        window,\n        {\n            resize: onResize,\n            online: onNetworkChange,\n            offline: onNetworkChange,\n        },\n        [],\n    );\n\n    return (\n        <div className='status'>\n            <span className='status-width'>width: {size.width}</span>\n            <span className='status-height'>height: {size.height}</span>\n            <span className={`status-${online ? 'online' : 'offline'}`}></span>\n        </div>\n    );\n};",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/event-handle.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useEventHandle(handle)",
    "title": "useEventHandle()",
    "description": "<p>React hook to create an imperative handle that is also an implementation of EventTarget. Can be used in conjunction with useImperativeHandle (React built-in) or useRegisterHandle/useHandle (Reactium SDK hooks).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "handle",
            "description": "<p>Interface for interacting with your component.</p>"
          }
        ]
      }
    },
    "name": "useEventHandle",
    "group": "ReactHook",
    "examples": [
      {
        "title": "EventHandleComponent.js",
        "content": "import React, { useEffect } from 'react';\nimport { useRegisterHandle, useEventHandle } from 'reactium-core/sdk';\n\nconst EventHandleComponent = () => {\n     const [ value, setValue ] = useState(1);\n     const createHandle = () => ({\n         value, setValue,\n     });\n\n     const [ handle, setHandle ] = useEventHandle(createHandle());\n\n     useEffect(() => {\n         setHandle(createHandle());\n     }, [value]);\n\n     useRegisterHandle('EventHandleComponent', () => handle);\n\n     const onClick = () => {\n         if (handle) {\n            setValue(value + 1);\n            handle.dispatchEvent(new CustomEvent('do-something'));\n         }\n     }\n\n     return (<button onClick={onClick}>Click Me ({value})</button>);\n };\n\n export default EventHandleComponent;",
        "type": "json"
      },
      {
        "title": "EventHandleConsumer.js",
        "content": "import React, { useEffect, useState } from 'react';\nimport { useHandle } from 'reactium-core/sdk';\n\nconst EventHandleConsumer = props => {\n    const [state, setState] = useState();\n    const handleEventTarget = useHandle('EventHandleComponent');\n\n    // when 'do-something' event occurs on\n    // EventHandleComponent, this component can react\n    const onDoSomething = e => {\n        setState(e.target.value);\n    };\n\n    useEffect(() => {\n        if (handleEventTarget) {\n            handleEventTarget.addEventListener('do-something', onDoSomething);\n        }\n        return () => handleEventTarget.removeEventListener('do-something', onDoSomething);\n    }, [handleEventTarget]);\n\n    return (\n        <div>\n            value: {state}\n        </div>\n    );\n};\n\nexport default EventHandleConsumer;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/event-handle.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useEventRefs()",
    "title": "useEventRefs()",
    "version": "1.0.7",
    "group": "ReactHook",
    "name": "useEventRefs",
    "description": "<p>Like useRefs, creates a single reference object that can be managed using the <code>get</code>/<code>set</code>/<code>del</code>/<code>clear</code> functions, however also an EventTarget object. <code>set</code>/<code>del</code>/<code>clear</code> methods dispatch <code>before-set</code>/<code>set</code>, <code>before-del</code>/<code>del</code>, and <code>before-clear</code>/<code>clear</code> events respectively.</p>",
    "examples": [
      {
        "title": "Usage",
        "content": "import React, { useState } from 'react';\nimport { useRefs } from '@atomic-reactor/reactium-sdk-core';\n\nconst MyComponent = () => {\n    const refs = useEventRefs();\n    const [ready, setReady] = useState(false);\n\n    const onChildRefReady = e => {\n        if (e.key === 'my.component') {\n            setReady(refs.get(e.key) !== undefined);\n        }\n    };\n\n    useEffect(() => {\n        refs.addEventListener('set', onChildRefReady);\n        return () => refs.removeEventListener('set', onChildRefReady);\n    }, []);\n\n    return (\n        <MyForwardRefComponent ref={cmp => refs.set('my.component', cmp)} />\n        {ready && <Controller control={refs.get('my.component')} />}\n    );\n};",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/useRefs.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useFocusEffect(container,dependencies)",
    "title": "useFocusEffect()",
    "group": "ReactHook",
    "name": "useFocusEffect",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Element",
            "optional": false,
            "field": "container",
            "description": "<p>The DOM element to search for the 'data-focus' element.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "dependencies",
            "description": "<p>Dependencies list passed to <code>useEffect</code>.</p>"
          }
        ],
        "Returns": [
          {
            "group": "Returns",
            "type": "Boolean",
            "optional": false,
            "field": "focused",
            "description": "<p>If the 'data-focus' element was found.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Reactium Usage",
        "content": "import cn from 'classnames';\nimport React, { useRef } from 'react';\nimport { useFocusEffect } from 'reactium-core/sdk';\n\nconst MyComponent = props => {\n    const containerRef = useRef();\n\n    const [focused] = useFocusEffect(containerRef.current);\n\n    return (\n        <form ref={containerRef}>\n            <input className={cn({ focused })} type='text' data-focus />\n            <button type='submit'>Submit</button>\n        </form>\n    );\n};",
        "type": "json"
      },
      {
        "title": "Returns",
        "content": "{Array} [focused:Element, setFocused:Function]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/focus-effect.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useFulfilledObject(object,keys)",
    "title": "useFulfilledObject()",
    "name": "useFulfilledObject",
    "group": "ReactHook",
    "description": "<p>Asyncronous React hook that determines if the supplied object has values for the supplied keys. Useful when you have many <code>useEffect</code> calls and need to know if multiple pieces of the state are set and ready for rendering.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "object",
            "description": "<p>The object to check.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "keys",
            "description": "<p>List of object paths to validate.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "\nimport React, { useEffect, useState } from 'react';\nimport { useFulfilledObject } from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n\n    const [state, setNewState] = useState({});\n    const [updatedState, ready, attempts] = useFulfilledObject(state, ['msg', 'timestamp']);\n\n    const setState = newState => {\n        newState = { ...state, ...newState };\n        setNewState(newState);\n    };\n\n    useEffect(() => {\n        if (!state.msg) {\n            setState({ msg: 'ok'});\n        }\n    }, [state]);\n\n    useEffect(() => {\n        if (!state.timestamp) {\n            setState({ timestamp: Date.now() });\n        }\n    }, [state]);\n\n    const render = () => {\n        return ready !== true ? null : <div>I'm READY!!</div>;\n    };\n\n    return render();\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/fulfilled-object.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useHandle(id,defaultValue)",
    "title": "useHandle()",
    "description": "<p>React hook to subscribe to a specific imperative handle reference. Useful for having one functional component control another.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "id",
            "description": "<p>Array of properties, or <code>.</code> separated object path. e.g. ['path','to','handle'] or 'path.to.handle'. Identifies the full path to an imperative handle.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": true,
            "field": "defaultValue",
            "description": "<p>the value to use for the handle if it does not exist.</p>"
          }
        ]
      }
    },
    "name": "useHandle",
    "group": "ReactHook",
    "examples": [
      {
        "title": "Counter.js",
        "content": "import React, { useState } from 'react';\nimport { useRegisterHandle } from 'reactium-core/sdk';\n\nconst Counter = ({id = 1}) => {\n    const [count, setCount] = useState(Number(id));\n\n    // id 'counter.1' by default\n    useRegisterHandle(['counter', id], () => ({\n        increment: () => setCount(count + 1),\n    }), [count]);\n\n    return (\n        <div>\n            <h1>Counter {id}</h1>\n            Count: {count}\n        </div>\n    );\n};\n\nexport default Counter;",
        "type": "json"
      },
      {
        "title": "CounterControl.js",
        "content": "import React from 'react';\nimport { useHandle } from 'reactium-core/sdk';\n\nconst noop = () => {};\nconst CounterControl = () => {\n    // Get increment control on handle identified at path 'counter.1'\n    const { increment } = useHandle('counter.1', { increment: noop }});\n\n    return (\n        <div>\n            <h1>CounterControl</h1>\n            <button onClick={increment}>Increment Counter</button>\n        </div>\n    );\n};\n\nexport default CounterControl;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/handle.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useHookComponent(hookName,defaultComponent,...params)",
    "title": "useHookComponent()",
    "description": "<p>A React hook used to define React component(s) that can be overrided by Reactium plugins, using the <code>Reactium.Component.register()</code> function.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hookName",
            "description": "<p>the unique string used to register component(s).</p>"
          },
          {
            "group": "Parameter",
            "type": "Component",
            "optional": false,
            "field": "defaultComponent",
            "description": "<p>the default React component(s) to be returned by the hook.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "params",
            "description": "<p>variadic list of parameters to be passed to the Reactium hook specified by hookName.</p>"
          }
        ]
      }
    },
    "name": "useHookComponent",
    "group": "ReactHook",
    "examples": [
      {
        "title": "parent.js",
        "content": "import React from 'react';\nimport { useHookComponent } from 'reactium-core/sdk';\n\n// component to be used unless overriden by Reactium.Component.register()\nconst DefaultComponent = () => <div>Default or Placeholder component</div>\n\nexport props => {\n    const MyComponent = useHookComponent('my-component', DefaultComponent);\n    return (\n        <div>\n            <MyComponent {...props} />\n        </div>\n    );\n};",
        "type": "json"
      },
      {
        "title": "reactium-hooks.js",
        "content": "import React from 'react';\nimport Reactium from 'reactium-core/sdk';\n\n// component to be used unless overriden by Reactium.Component.register()\nconst ReplacementComponent = () => <div>My Plugin's Component</div>\n\nReactium.Component.register('my-component', ReplacementComponent);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/component.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useIsContainer(element,container)",
    "title": "useIsContainer()",
    "name": "useIsContainer",
    "group": "ReactHook",
    "description": "<p>React hook that determines if the element is a child of the container. Useful for traversing the DOM to find out if an event or action happened within the specified container.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Node",
            "optional": false,
            "field": "element",
            "description": "<p>The inner most element. Consider this the starting point.</p>"
          },
          {
            "group": "Parameter",
            "type": "Node",
            "optional": false,
            "field": "container",
            "description": "<p>The outer most element. Consider this the destination.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "import { useIsContainer } from 'reactium-core/sdk';\nimport React, { useEffect, useRef, useState } from 'react';\n\nexport const Dropdown = props => {\n    const container = useRef();\n\n    const [expanded, setExpanded] = useState(props.expanded || false);\n\n    const isContainer = useIsContainer();\n\n    const dismiss = e => {\n        // already dismissed? -> do nothing!\n        if (!expanded) return;\n\n        // e.target is inside container.current? -> do nothing!\n        if (isContainer(e.target, container.current)) return;\n\n        // e.target is outside container.current? -> collapse the menu\n        setExpanded(false);\n    };\n\n    const toggle = () => setExpanded(!expanded);\n\n    useEffect(() => {\n        if (!container.current || typeof window === 'undefined') return;\n\n        window.addEventListener('mousedown', dismiss);\n        window.addEventListener('touchstart', dismiss);\n\n        return () => {\n            window.removeEventListener('mousedown', dismiss);\n            window.removeEventListener('touchstart', dismiss);\n        }\n\n    }, [container.current]);\n\n    return (\n        <div ref={container}>\n            <button onClick={toggle}>Toggle Dropdown</button>\n            {expanded && (\n                <ul>\n                    <li><a href='#item-1' onClick={toggle}>Item 1</a></li>\n                    <li><a href='#item-2' onClick={toggle}>Item 2</a></li>\n                    <li><a href='#item-3' onClick={toggle}>Item 3</a></li>\n                </ul>\n            )}\n        </div>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/is-container.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useProfileAvatar(user)",
    "title": "useProfileAvatar()",
    "description": "<p>React Hook that gets the avatar or default avatar of the supplied user.</p>",
    "name": "useProfileAvatar",
    "group": "ReactHook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "user",
            "defaultValue": "Reactium.User.current",
            "description": "<p>The user object. If an empty user object is supplied, the system default avatar will be used.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ProfileWidget/hooks/index.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useProfileGreeting(user)",
    "title": "useProfileGreeting()",
    "description": "<p>React Hook that gets the profile greeting message.</p>",
    "name": "useProfileGreeting",
    "group": "ReactHook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "user",
            "defaultValue": "Reactium.User.current",
            "description": "<p>The user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ProfileWidget/hooks/index.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useProfileRole(user)",
    "title": "useProfileRole()",
    "description": "<p>React Hook that gets the profile role message.</p>",
    "name": "useProfileRole",
    "group": "ReactHook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "user",
            "defaultValue": "Reactium.User.current",
            "description": "<p>The user object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ProfileWidget/hooks/index.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useReduxState(select,shouldUpdate,domain)",
    "title": "useReduxState()",
    "description": "<p>Similar to React useState(), returns selected redux state, and action dispatching function, as the first and second elements of an array.</p> <p>Takes an optional shouldUpdate callback (see useSelect), which does a shallow comparison of previous and current selected state by default. The update callback returned expects to be called with an object, and will cause a dispatch: { type: 'DOMAIN_UPDATE', domain, // the passed domain update, // object passed to update }</p> <p>Note: the boilerplate redux reducer created with <code>arcli component</code> will target action dispatched from this hoook.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "select",
            "description": "<p>Optional select callback (see useSelect), which selects for the domain by default.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "shouldUpdate",
            "description": "<p>Optional shouldUpdate callback (see useSelect), which does a shallow comparison of previous and current selected state by default.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>The targeted redux domain.</p>"
          }
        ]
      }
    },
    "name": "useReduxState",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/use-select/lib/named-exports/redux.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useRefs()",
    "title": "useRefs()",
    "group": "ReactHook",
    "name": "useRefs",
    "description": "<p>Creates a single reference object that can be managed using the <code>get</code>/<code>set</code>/<code>del</code>/<code>clear</code> functions.</p>",
    "examples": [
      {
        "title": "Usage",
        "content": "import React, { useEffect, useState } from 'react';\nimport { useRefs } from '@atomic-reactor/reactium-sdk-core';\n\nconst MyComponent = () => {\n    const refs = useRefs();\n    const [state, setState] = useState({ input: null });\n\n    const onClick = () => {\n        const inputElm = refs.get('input');\n        setState({ ...state, input: inputElm.value });\n        inputElm.value = '';\n    };\n\n    return (\n        <div ref={elm => refs.set('container', elm)}>\n            {state.input && <div>{state.input}</div>}\n            <input type='text' ref={elm => refs.set('input', elm)} />\n            <button onClick={onClick}>Update</button>\n        </div>\n    );\n};",
        "type": "json"
      },
      {
        "title": "Proxy Reference Usage",
        "content": "// sometimes you need a forwarded ref to be a ref object from useRef() or React.createRef()\n// You can create proxy factory for the refs to achieve this.\nimport React, { useEffect, useState } from 'react';\nimport { EventForm } from '@atomic-reactor/reactium-ui';\nimport { useRefs } from '@atomic-reactor/reactium-sdk-core';\n\nconst MyComponent = () => {\n   const refs = useRefs();\n   // creates a factory for React.createRef() object to your refs\n   const refProxy = refs.createProxy('form');\n\n   const [state, setState] = useState({});\n\n   const onSubmit = e => {\n       const formRef = refs.get('form');\n       setState({ ...formRef.getValue() });\n   };\n\n   // EventForm expects a reference object, not a callback function\n   // When EventForm references ref.current, it will actually get refs.get('form').\n   // When EventForm sets the ref.current value, it will actually perform refs.set('form', value);\n   return (\n       <EventForm ref={refProxy} onSubmit={onSubmit}>\n           <input type='text' name=\"foo\" />\n           <button type=\"submit\">Submit the Form</button>\n       </EventForm>\n   );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/useRefs.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useRegisterHandle(id,cb,deps)",
    "title": "useRegisterHandle()",
    "description": "<p>React hook to create a new imperative handle reference, similar to <code>useImperativeHandle()</code> except that instead of using <code>React.forwardRef()</code> to attach the handle to a parent compenent ref. A ref is generated for you and is assigned the current value of the callback <code>cb</code>, is registered with <code>Reactium.Handle</code>, and made available to all other components at the object path <code>id</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "id",
            "description": "<p>Array of properties, or <code>.</code> separated object path. e.g. ['path','to','handle'] or 'path.to.handle'. Identifies the full path to an imperative handle.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "cb",
            "description": "<p>Function that returns value to be assigned to the imperative handle reference.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "deps",
            "description": "<p>Array of values to watch for changes. When changed, your reference will be updated by calling <code>cb</code> again. All <code>Reactium.Handle.subscribe()</code> subscribers will be called on updates, and relevant <code>useHandle()</code> hooks will trigger rerenders.</p>"
          }
        ]
      }
    },
    "name": "useRegisterHandle",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/handle.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useRoles(search)",
    "title": "useRoles()",
    "description": "<p>React hook to get roles object. If search is provided, will retrieve a specific role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Name, level or object id of the roles to retrieve. If not provide, an object will all roles will be returned.</p>"
          }
        ]
      }
    },
    "name": "useRoles",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/roles.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useSelect(params)",
    "title": "useSelect()",
    "description": "<p>React hook for subscribing to only the updates from Redux store that you care about, and no more. This is superior to <code>react-redux</code> connect, in that your component will not update on every dispatch, only those state changes you have specifically targeted.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "params",
            "description": "<ol> <li>Callback function taking current state object from Redux store, and returning what you care about, or</li> <li>an Object with <code>select</code>, <code>shouldUpdate</code> and <code>returnMode</code> props.</li> </ol>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "params.select",
            "description": "<p>Callback function taking current state object from Redux store, and returning what you care about.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "params.shouldUpdate",
            "description": "<p>Callback function object with 2 properties <code>newState</code> and <code>prevState</code>, containing the current results of the select function, and the previous results of the select function, respectively. Returns true if your component should update, otherwise false. By default, <code>useSelect</code> will do a shallow comparison.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "params.returnMode",
            "defaultValue": "state",
            "description": "<p><code>state</code> to get the current state, <code>ref</code> to get the whole React reference object (for more realtime updates), and <code>get</code> for a getter function that takes object-path</p>"
          }
        ]
      }
    },
    "name": "useSelect",
    "group": "ReactHook",
    "examples": [
      {
        "title": "Simple.js",
        "content": "import React from 'react';\nimport { useSelect } from '@atomic-reactor/use-select';\n\n// given a Redux state of { \"Simple\": {\"foo\": { \"bar\": \"baz\" }}}\nexport default () => {\n    // Simple select callback: will update the component only when state.Simple.foo.bar changes no more.\n    const baz = useSelect(state => state.Simple.foo.bar);\n    return (\n        <div>\n            {baz}\n        </div>\n    );\n};",
        "type": "json"
      },
      {
        "title": "Advanced.js",
        "content": "import React from 'react';\nimport { useSelect } from '@atomic-reactor/use-select';\n\n// given a Redux state of {\n//    \"Advanced\": {\n//      \"foo\": { \"bar\": \"baz\" },\n//      \"hello\": \"world\",\n//    }\n//}\nexport default () => {\n   // Advanced select callback: will update the component only conditions of shouldUpdate are true.\n   // All other Redux state changes are ignored.\n   const Advanced = useSelect({\n     select: state => state.Advanced,\n\n     shouldUpdate: ({newState, prevState}) => {\n       // newState and prevState are current and previous outcome of select callback above\n       return newState.foo.bar !== prevState.foo.bar || newState.hello !== prevState.hello;\n     },\n   });\n\n   return (\n       <div>\n           {Advanced.foo.bar}\n           {Advanced.hello}\n       </div>\n   );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/use-select/lib/named-exports/redux.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useSettingGroup(group)",
    "title": "useSettingGroup()",
    "version": "3.2.1",
    "description": "<p>Get and set a group of Actinium settings.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>the setting group id</p>"
          }
        ]
      }
    },
    "name": "useSettingGroup",
    "group": "ReactHook",
    "examples": [
      {
        "title": "Usage",
        "content": "import React from 'react';\nimport { useSettingGroup } from 'reactium-core/sdk';\nimport op from 'object-path';\n\nexport default () => {\n    const { canGet, canSet, settingGroup, setSettingGroup } = useSettingGroup('MySettings');\n\n    // Set MySetting.foo = 'bar' on click\n    return (\n        <div>\n            {canGet && <span>Foo Setting: {op.get(settingGroup, 'foo')}</span>}\n\n            <button disabled={!canSet} onClick={() => setSettingGroup({\n                ...settingGroup,\n                foo: 'bar',\n            })}>Update Setting</button>\n        </div>\n    )\n}",
        "type": "json"
      },
      {
        "title": "Returns",
        "content": "{\n    canGet, // Boolean, if current user is allowed to get this setting group\n    canSet, // Boolean, if current user is allowed to set this setting group\n    settingGroup, // setting group object\n    setSettingGroup, // wrapper around Reactium.Setting.set(), will trigger optimistic update and rerender on response\n}",
        "type": "json"
      }
    ],
    "filename": ".core/sdk/named-exports/setting.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useStatus(initialStatus)",
    "title": "useStatus()",
    "group": "ReactHook",
    "name": "useStatus",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "initialStatus",
            "defaultValue": "pending",
            "description": "<p>The initial status of the hook.</p>"
          }
        ]
      }
    },
    "description": "<p>Synchronously set a status value that can be checked within a function scope without updating the state of the component. Useful when doing asynchronous activities and the next activity depends on a status of some sort from the previous activity.</p> <p>Returns [status:String, setStatus:Function, isStatus:Function, getStatus:Function]</p> <h3>status</h3> <p>The current asynchronous status value. (is accurate once per render)</p> <h3>setStatus(status:String, forceRender:Boolean = false)</h3> <p>Set the status value. If forceRender is true, a rerender will be triggered. <em><strong>Beware:</strong></em> forceRender may have unintended consequence and should be used in last status before re-rendering situations only.</p> <h3>isStatus(statuses:Array)</h3> <p>Check if the current status matches the statuses passed.</p> <h3>getStatus()</h3> <p>Get the synchrounous value of the status. This can matter if you need to set and check the value in the same render cycle.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/useStatus.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useStore()",
    "title": "useStore()",
    "description": "<p>Just gimme the store damnit! This React hook provides the Redux store when used on a component declared within the Store Provider.</p>",
    "name": "useStore",
    "group": "ReactHook",
    "examples": [
      {
        "title": "MyComponent.js",
        "content": "import React, { useEffect } from 'react';\nimport { useStore } from '@atomic-reactor/use-select';\n\nexport default () => {\n    const { dispatch, getState, subscribe } = useStore();\n    let count = getState();\n\n    useEffect(() => {\n        const unsubscribe = subscribe(() => {\n            count = getState();\n        });\n\n        return unsubscribe;\n    });\n\n    return (\n        <div>\n            <button onClick={() => dispatch({ type: 'BUTTON_CLICK' })}>\n                Click {count}\n            </button>\n        </div>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/use-select/lib/named-exports/redux.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useSyncState(initialState)",
    "title": "useSyncState()",
    "description": "<p>Intended to provide an object to get and set state synchrounously, while providing a EventTarget object that can dispatch a 'set' event when the state is updated.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "initialState",
            "description": "<p>The initial state.</p>"
          }
        ]
      }
    },
    "name": "useSyncState",
    "group": "ReactHook",
    "examples": [
      {
        "title": "SimpleExample",
        "content": "import React from 'react';\nimport { useSyncState } from 'reactium-core/sdk';\nexport const SimpleExample = () => {\n    const clickState = useSyncState({ clicks: 1 });\n    const clicks = clickState.get('clicks');\n    return (\n        <div>Clicked {clicks} times <button\n            onClick={() => clickState.set('clicks', clicks + 1)}>Click Me</button>\n        </div>\n    );\n };",
        "type": "json"
      },
      {
        "title": "EventTarget",
        "content": "import React from 'react';\nimport { useSyncState, useRegisterHandle } from 'reactium-core/sdk';\nexport const Clicker = () => {\n    const clickState = useSyncState({ clicks: 1 });\n    const clicks = clickState.get('clicks');\n    useRegisterHandle('ClickState', () => clickState);\n\n    return (\n        <div>Clicked {clicks} times <button\n            onClick={() => clickState.set('clicks', clicks + 1)}>Click Me</button>\n        </div>\n    );\n };",
        "type": "json"
      },
      {
        "title": "Consumer",
        "content": "import React, { useState, useEventEffect } from 'react';\nimport { useHandle } from 'reactium-core/sdk';\n// communicate state with other components\nexport const Listener = () => {\n    const [clicked, setClicked] = useState(false);\n    const handle = useHandle('ClickState')\n    const numClicks = handle.get('clicks');\n\n    const remoteClicked = e => {\n        if (numClicks < e.get('clicks')) {\n            setClicked(true);\n        }\n    };\n\n    useEventEffect(handle, { set: remoteClicked }, []);\n\n    return (\n        <div>Clicker {clicked ? 'unclicked' : 'clicked'}</div>\n    );\n };",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/useSyncState.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useWindow()",
    "title": "useWindow()",
    "description": "<p>React hook which resolves to the browser or electron window when run in normal context or in the Reactium toolkit. Otherwise will return <code>undefined</code>. This is important particularly when you need to inspect the window inside the <code>react-frame-component</code> (<code>FrameContextConsumer</code>) which sandboxes your component withing the toolkit. Your component will automatically be rendered inside the WindowProvider, which will provide the correct <code>window</code> and <code>document</code> objects. See <code>useWindowSize()</code> for the most important use case.</p>",
    "examples": [
      {
        "title": "BrowserComponent.js",
        "content": "import Reactium, { useWindow } from 'reactium-core/sdk';\nimport React, { useEffect } from 'react';\nimport op from 'object-path';\n\nexport default () => {\n    const window = useWindow();\n    const [width, setWidth] = op.get(window, 'innerWidth', 1);\n\n    useEffect(() => {\n        const isBrowser = Reactium.Utils.isWindow(window);\n        const updateWidth = () => setWidth(window.innerWidth);\n\n        // safe for server-side rendering, which has no window\n        // when used in toolkit Frame, will use correct window object\n        if (isBrowser) {\n            window.addEventListener('resize', updateWidth)\n            return () => window.removeEventListener('resize', updateWidth);\n        }\n    }, []);\n};\n\n // import WindowProvider from 'reactium-core/components/WindowProvider';",
        "type": "json"
      }
    ],
    "name": "useWindow",
    "group": "ReactHook",
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/window.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useWindowSize(params)",
    "title": "useWindowSize()",
    "description": "<p>Returns window <code>innerWidth</code> number, <code>innerHeight</code> number, and current <code>breakpoint</code>, and updates on window resizes. When using the out of the box scss styles in Reactium, a grid system is in place, and is defined by an overridable sass map <code>$breakpoints-max</code>, defined by default as:</p> <pre class=\"prettyprint\">$breakpoints-max: ('xs': 640, 'sm': 990, 'md': 1280, 'lg': 1440,'xl': 1600) !default; </code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "params",
            "description": "<p><code>defaultWidth</code>, <code>defaultHeight</code>, and debounce <code>delay</code> properties.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "params.defaultWidth",
            "defaultValue": "1",
            "description": "<p>Default width returned by the hook when window object is <code>undefined</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "params.defaultHeight",
            "defaultValue": "1",
            "description": "<p>Default height returned by the hook when window object is <code>undefined</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "params.delay",
            "defaultValue": "0",
            "description": "<p>Debounce delay to throttle many window resize events, to prevent unnecessary rerenders of your component using this hook.</p>"
          }
        ]
      }
    },
    "name": "useWindowSize",
    "group": "ReactHook",
    "examples": [
      {
        "title": "ResponsiveComponent.js",
        "content": "import React from 'react';\nimport { useWindowSize } from 'reactium-core/sdk';\n\nconst Mobile = () => {\n   return (\n       <div>I'm a mobile component</div>\n   );\n}\n\nconst Tablet = () => {\n   return (\n       <div>I'm a tablet component</div>\n   );\n}\n\nconst Desktop = () => {\n   return (\n       <div>I'm a desktop component</div>\n   );\n}\n\nexport () => {\n   const { breakpoint } = useWindowSize();\n\n   switch(breakpoint) {\n       case 'xl':\n       case 'lg':\n       return <Desktop />;\n\n       case 'md':\n       return <Tablet />;\n\n       case 'xs':\n       case 'sm':\n       default:\n       return <Mobile />;\n   }\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/window.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "ReactHook",
    "url": "useZoneComponents(zone)",
    "title": "useZoneComponents()",
    "description": "<p>A React hook used in the <code>Zone</code> component to determine what components should currently be rendered. Useful to observe a zone in another component. If you want to observe to the zone components without necessarily causing a rerender in your component, use <code>Reactium.Zone.getZoneComponents()</code> (to get a list of components in the zone), alone or in combination with <code>Reactium.Zone.subscribe()</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dereference",
            "defaultValue": "true",
            "description": "<p>If true, returns the current value of the components in the zone, separate from the reference. Otherwise, returns the ReactiumSyncState object. This can be useful if you wish to use the components value with a non-memoized value.</p>"
          }
        ]
      }
    },
    "name": "useZoneComponents",
    "group": "ReactHook",
    "examples": [
      {
        "title": "Example",
        "content": "import React from 'react';\nimport { useZoneComponents } from 'reactium-core/sdk';\n\nexport props => {\n    const zoneComponents = useZoneComponents('my-zone');\n\n    return (\n        <div>\n            Components in Zone: {zoneComponents.length}\n        </div>\n    );\n};",
        "type": "json"
      },
      {
        "title": "NoDereference",
        "content": "import React from 'react';\nimport { useZoneComponents } from 'reactium-core/sdk';\n\n// Use this method when the zone components are not refreshing smoothly on\n// rendering.\nexport props => {\n    const zoneComponents = useZoneComponents('my-zone', false);\n\n    return (\n        <div>\n            Components in Zone: {zoneComponents.get().length}\n        </div>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/Zone.js",
    "groupTitle": "ReactHook"
  },
  {
    "type": "Object",
    "url": "Cache",
    "title": "Cache",
    "version": "3.0.3",
    "name": "Cache",
    "group": "Reactium.Cache",
    "description": "<p>Cache allows you to easily store application data in memory.</p>",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.clear()",
    "title": "Cache.clear()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.clear",
    "description": "<p>Delete all cached values.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key to delete. If the value is an <code>{Object}</code> you can use an object path to delete a specific part of the value. The updated value is then returned.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Cache.clear();",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.del(key)",
    "title": "Cache.del()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.del",
    "description": "<p>Delete the value for a given key. Returns <code>{Boolean}</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key to delete. If the value is an <code>{Object}</code> you can use an object path to delete a specific part of the value. The updated value is then returned.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "// Given the cached value: { foo: { bar: 123, blah: 'hahaha' } }\nReactium.Cache.del('foo.bar'); // returns: { blah: 'hahaha' }\nReactium.Cache.del('foo');     // returns: true",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.get(key)",
    "title": "Cache.get()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.get",
    "description": "<p>Retrieves the value for a given key. If the value is not cached <code>null</code> is returned.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>The key to retrieve. If the value is an <code>{Object}</code> you can use an object path for the key. If no key is specified the entire cache is returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": true,
            "field": "default",
            "description": "<p>The default value to return if key is not found.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "// Given the cached value: { foo: { bar: 123 } }\nReactium.Cache.get('foo.bar'); // returns: 123;\nReactium.Cache.get('foo');     // returns: { bar: 123 }",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.keys()",
    "title": "Cache.keys()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.keys",
    "description": "<p>Returns an array of the cached keys.</p>",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.memsize()",
    "title": "Cache.memsize()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.memsize",
    "description": "<p>Returns the number of entries taking up space in the cache.</p>",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.merge(values)",
    "title": "Cache.merge()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.merge",
    "description": "<p>Merges the supplied values object with the current cache. Any existing entries will remain in cache. Duplicates will be overwritten unless <code>option.skipDuplicates</code> is <code>true</code>. Entries that would have exipired since being merged will expire upon merge but their timeoutCallback will not be invoked. Returns the new size of the cache.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "values",
            "description": "<p>Key value pairs to merge into the cache.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "// Give the existing cache: { foo: 'bar' }\n\nReactium.Cache.merge({\n    test: {\n        value: 123,\n        expire: 5000,\n    },\n});\n\nReactium.Cache.get()\n// returns: { foo: 'bar', test: 123 }",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.set(key,value,timeout,timeoutCallback)",
    "title": "Cache.set()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.set",
    "description": "<p>Sets the value for a given key. If the value is an <code>{Object}</code> and is already cached, you can use an object path to update a specific part of the value. Returns the cached value.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key to set. If the key is an object path and the key does not exist, it will be created.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "value",
            "description": "<p>The value to cache.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeout",
            "description": "<p>Remove the value in the specified time in milliseconds. If no timeout value specified, the value will remain indefinitely.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "timeoutCallback",
            "description": "<p>Function called when the timeout has expired. The timeoutCallback will be passed the key and value as arguments.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "// The following are equivalent\nReactium.Cache.set('foo', { bar: 123 });\nReactium.Cache.set('foo.bar', 123);\n\n// Set to expire in 5 seconds\nReactium.Cache.set('error', 'Ivnalid username or password', 5000);\n\n// Set to expire in 5 seconds and use a timeoutCallback\nReactium.Cache.set('foo', { bar: 456 }, 5000, (key, value) => console.log(key, value));",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.size()",
    "title": "Cache.size()",
    "version": "3.0.3",
    "group": "Reactium.Cache",
    "name": "Cache.size",
    "description": "<p>Returns the current number of entries in the cache.</p>",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Cache.subscribe(key,cb)",
    "title": "Cache.subscribe()",
    "group": "Reactium.Cache",
    "name": "Cache.subscribe",
    "description": "<p>Subscribe to cache changes that impact a particular key. Returns an unsubscribe function.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "key",
            "description": "<p>object path of the cache value (array or string)</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "cb",
            "description": "<p>The callback function to call when impacting changes have been made to the subscribed cache. Changes include any set/put, delete, clear, merge, or expiration that <em>may</em> impact the value you care about.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "const foo = Reactium.Cache.get('values.foo');\nReactium.Cache.subscribe('values.foo', ({op, ...params}) => {\nswitch(op) {\n    case 'set': {\n        const { key, value } = params;\n        // do something with new value if applicable\n        // you can see the key that impacted the cache value\n        break;\n    }\n     case 'del': {\n        // the key that was deleted\n        const { key } = params;\n        // do something about the deletion\n        break;\n    }\n     case 'expire': {\n        // do something about expiration (which will have impacted your value for sure)\n        // this will never be called if your value doesn't expire\n        break;\n    }\n     case 'merge': {\n        // complete cache object after merge\n        // may impact you, you'll have to check\n        const { obj } = params;\n        if (op.get(obj, 'values.foo') !== foo) {\n            // do something\n        }\n        break;\n    }\n     default:\n    break;\n}\n});",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/cache/index.js",
    "groupTitle": "Reactium.Cache"
  },
  {
    "type": "Function",
    "url": "Capability.Settings",
    "title": "Capability.Settings",
    "version": "3.2.1",
    "description": "<p>Registry for adding Capabilites to the Settings dialog.</p>",
    "name": "Capability.Settings",
    "group": "Reactium.Capability",
    "parameter": {
      "fields": {
        "Registry Object": [
          {
            "group": "Registry Object",
            "type": "String",
            "optional": false,
            "field": "capability",
            "description": "<p>Value used to identify the capability. Example: <code>my-component.create</code>.</p>"
          },
          {
            "group": "Registry Object",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Display text.</p>"
          },
          {
            "group": "Registry Object",
            "type": "String",
            "optional": false,
            "field": "tooltip",
            "description": "<p>Help text.</p>"
          },
          {
            "group": "Registry Object",
            "type": "Mixed",
            "optional": true,
            "field": "zone",
            "description": "<p>Array|String The AppSettings <code>id</code> value. If empty, the capabilities will show up in all AppSettings Capabilites list.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Registration",
        "content": "Reactium.Capability.Settings.register('shortcodes-manage', {\n    capability: 'shortcodes.create',\n    title: 'Shortcodes: Create/Update/Delete',\n    tooltip: 'Ability to manage Shortcodes.',\n    zone: 'app-settings',\n });",
        "type": "json"
      },
      {
        "title": "Usage",
        "content": "import React from 'react';\nimport _ from 'underscore';\nimport Reactium from 'reactium-core/sdk';\n\nconst CapabilityList = ({ zone = 'my-zone' }) => {\n\n    // Filter only 'my-zone' capabilities\n    const capabilities = _.where(Reactium.Capability.Settings.list, { zone });\n\n    // Render a list\n    return (\n        <ul>\n            {capabilities.map(({ capability, title, tooltip }) => (\n                <li key={capability} data-tooltip={tooltip}>\n                    {capability} - {title}\n                </li>\n            ))}\n        </ul>\n    );\n};",
        "type": "json"
      }
    ],
    "filename": "src/app/components/Admin/Settings/AppSettings/reactium-hooks.js",
    "groupTitle": "Reactium.Capability"
  },
  {
    "type": "Function",
    "url": "Component.register(hook,component,order)",
    "title": "Component.register()",
    "group": "Reactium.Component",
    "name": "Component.register",
    "description": "<p>Register a React component to be used with a specific useHookComponent React hook. This must be called before the useHookComponent that defines the hook.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hook",
            "description": "<p>The hook name</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "component",
            "description": "<p>component(s) to be output by useHookComponent</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>precedent of this if Component.register is called multiple times (e.g. if you are trying to override core or another plugin)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "reactium-hooks.js",
        "content": "import React from 'react';\nimport Reactium from 'reactium-core/sdk';\n\n// component to be used unless overriden by Reactium.Component.register()\nconst ReplacementComponentA = () => <div>My Plugin's Component</div>\nconst ReplacementComponentB = () => <div>My Alternative Component</div>\n\n// Simple Version\nReactium.Component.register('my-component', ReplacementComponentA);\n\n// Advanced Form using Reactium.Hook SDK\nReactium.Hook.register('my-component', async (...params) => {\n    const context = params.pop(); // context is last argument\n    const [param] = params;\n    if (param === 'test') {\n        context.component = ReplacementComponentA;\n    } else {\n        context.component = ReplacementComponentB;\n    }\n}\n})",
        "type": "json"
      },
      {
        "title": "parent.js",
        "content": "import React from 'react';\nimport { useHookComponent } from 'reactium-core/sdk';\n\n// component to be used unless overriden by Reactium.Component.register()\nconst DefaultComponent = () => <div>Default or Placeholder component</div>\n\nexport props => {\n    const MyComponent = useHookComponent('my-component', DefaultComponent, 'test');\n    return (\n        <div>\n            <MyComponent {...props} />\n        </div>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/component/index.js",
    "groupTitle": "Reactium.Component"
  },
  {
    "type": "Asynchronous",
    "url": "Content.ACLToReadWrite()",
    "title": "Content.ACLToReadWrite()",
    "description": "<p>Takes an ACL and returns an object containing <code>canRead</code> and <code>canWrite</code>, both containing objectIds of roles and users that have permissiont to read or write the content respectively. Useful as input for <code>PermissionSelector</code> registered component.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ACL",
            "description": "<p>serialized Parse ACL object.</p>"
          }
        ]
      }
    },
    "name": "Content.ACLToReadWrite",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.changeSlug(content,handle)",
    "title": "Content.changeSlug()",
    "description": "<p>Create/Update content of a defined Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "newSlug",
            "description": "<p>New unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The existing slug for the content (used to lookup the content).</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content (used to lookup the content).</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content (used to lookup the content).</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          },
          {
            "group": "history",
            "type": "Number",
            "optional": true,
            "field": "revision",
            "description": "<p>index in branch history to retrieve (default index of latest revision)</p>"
          }
        ]
      }
    },
    "name": "Content.changeSlug",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.changelog(objectId,options,handle)",
    "title": "Content.changelog()",
    "description": "<p>Get changelog for content item. Some of the built-in changes that are tracked:</p> <ul> <li>CREATED: meta.history to get starting branch and revision index</li> <li>REVISED: meta.history to get branch and revision index</li> <li>SET_REVISION: meta.history to get branch and revision index</li> <li>SET_ACL: meta.ACL to get what ACL was changed to</li> <li>SET_STATUS: meta.history to get branch and revision index, meta.status to get new status</li> <li>PUBLISHED: meta.history to get branch and revision index published</li> <li>UNPUBLISHED</li> <li>SCHEDULE: meta.publish to get sunrise/sunset/history scheduled</li> <li>SCHEDULED_PUBLISH: meta.history to get branch and revision index published</li> <li>SCHEDULED_UNPUBLISH</li> <li>TRASH</li> <li>RESTORE</li> </ul>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contentId",
            "description": "<p>Parse objectId of content.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>options to request changelog</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "options": [
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "descending",
            "description": "<p>Order &quot;descending&quot; or &quot;ascending&quot;</p>"
          },
          {
            "group": "options",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "1000",
            "description": "<p>Limit page results</p>"
          },
          {
            "group": "options",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number</p>"
          }
        ]
      }
    },
    "name": "Content.changelog",
    "group": "Reactium.Content",
    "examples": [
      {
        "title": "Usage:",
        "content": "import Reactium from 'reactium-core/sdk';\n\nReactium.Content.changelog('zJkUz6dD49').then(data => {\n  console.log({data});\n  // data: {\n  //   \"count\": 5,\n  //   \"next\": 2,\n  //   \"page\": 1,\n  //   \"pages\": 2,\n  //   \"prev\": null,\n  //   \"results\": [\n  //     {\n  //       \"meta\": {\n  //         \"ACL\": {\n  //           \"role:administrator\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"role:super-admin\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"lL1SfyzHiE\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           }\n  //         }\n  //       },\n  //       \"contentId\": \"zJkUz6dD49\",\n  //       \"collection\": \"Content_article\",\n  //       \"userId\": \"lL1SfyzHiE\",\n  //       \"changeType\": \"SET_ACL\",\n  //       \"createdAt\": \"2020-02-25T21:03:16.325Z\",\n  //       \"updatedAt\": \"2020-02-25T21:03:16.325Z\",\n  //       \"objectId\": \"4sanIa8yLR\"\n  //     },\n  //     {\n  //       \"meta\": {\n  //         \"ACL\": {\n  //           \"role:contributor\": {\n  //             \"read\": true\n  //           },\n  //           \"role:administrator\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"role:super-admin\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"lL1SfyzHiE\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           }\n  //         }\n  //       },\n  //       \"contentId\": \"zJkUz6dD49\",\n  //       \"collection\": \"Content_article\",\n  //       \"userId\": \"lL1SfyzHiE\",\n  //       \"changeType\": \"SET_ACL\",\n  //       \"createdAt\": \"2020-02-25T21:02:50.193Z\",\n  //       \"updatedAt\": \"2020-02-25T21:02:50.193Z\",\n  //       \"objectId\": \"Ni2hNTdv52\"\n  //     },\n  //     {\n  //       \"meta\": {\n  //         \"ACL\": {\n  //           \"*\": {\n  //             \"read\": true\n  //           },\n  //           \"role:administrator\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"role:super-admin\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"lL1SfyzHiE\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           }\n  //         }\n  //       },\n  //       \"contentId\": \"zJkUz6dD49\",\n  //       \"collection\": \"Content_article\",\n  //       \"userId\": \"lL1SfyzHiE\",\n  //       \"changeType\": \"SET_ACL\",\n  //       \"createdAt\": \"2020-02-25T20:34:56.221Z\",\n  //       \"updatedAt\": \"2020-02-25T20:34:56.221Z\",\n  //       \"objectId\": \"0LZT6CMqlq\"\n  //     },\n  //     {\n  //       \"meta\": {\n  //         \"ACL\": {\n  //           \"*\": {\n  //             \"read\": true\n  //           },\n  //           \"role:administrator\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"role:super-admin\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           },\n  //           \"lL1SfyzHiE\": {\n  //             \"read\": true,\n  //             \"write\": true\n  //           }\n  //         }\n  //       },\n  //       \"contentId\": \"zJkUz6dD49\",\n  //       \"collection\": \"Content_article\",\n  //       \"userId\": \"lL1SfyzHiE\",\n  //       \"changeType\": \"SET_ACL\",\n  //       \"createdAt\": \"2020-02-25T20:32:12.611Z\",\n  //       \"updatedAt\": \"2020-02-25T20:32:12.611Z\",\n  //       \"objectId\": \"f1d8OaDHOk\"\n  //     }\n  //   ]\n  // }\n})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Async",
    "url": "Content.changelogSubscribe(contentId,advancedQuery)",
    "title": "Content.changelogSubscribe()",
    "description": "<p>Subscribe to content changelog.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "contentId",
            "description": "<p>the objectId of the content, by default all changes for all content will be subscribed. Promise resolves to unsubscribe callback.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "advancedQuery",
            "description": "<p>list of query operations and parameters</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "advancedQueryItem": [
          {
            "group": "advancedQueryItem",
            "type": "String",
            "optional": false,
            "field": "operation",
            "description": "<p>method of Parse.Query to include in query. e.g. 'equalTo'</p>"
          },
          {
            "group": "advancedQueryItem",
            "type": "Array",
            "optional": false,
            "field": "params",
            "description": "<p>parameters passed to Parse.Query operation. e.g. ['collection', 'Content_article']</p>"
          }
        ]
      }
    },
    "name": "Content.changelogSubscribe",
    "group": "Reactium.Content",
    "examples": [
      {
        "title": "Simple Usage:",
        "content": "import Reactium from 'reactium-core/sdk';\n\n// simple subscription to content with objectId 'zJkUz6dD49'\nReactium.Content.changelogSubscribe('zJkUz6dD49').then(unsubscribe => {\n    setTimeout(unsubscribe, 10 * 60 * 1000); // unsubscribe in 10 minutes\n});\n\n// listen for this content to be deleted\nReactium.Hook.register('changelog-created-zJkUz6dD49', async logEntry => {\n    if (logEntry.changeType === 'TRASH') alert(`${logEntry.contentId} in ${logEntry.collection} deleted!`);\n});",
        "type": "json"
      },
      {
        "title": "Advanced Usage:",
        "content": "import Reactium from 'reactium-core/sdk';\n\n// subscribe to any article changes\nReactium.Content.changelogSubscribe(null, [{\n    operation: 'equalTo',\n    params: ['collection', 'Content_article']\n}])\n.then(unsubscribe => {\n   setTimeout(unsubscribe, 10 * 60 * 1000); // unsubscribe in 10 minutes\n});\n\n// listen for deletion of any article\nReactium.Hook.register('changelog-created', async logEntry => {\n    if (logEntry.collection === 'Content_article' && logEntry.changeType === 'TRASH')\n        alert(`Article ${logEntry.contentId} deleted!`);\n});",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.clone(params,handle)",
    "title": "Content.clone()",
    "name": "Content.clone",
    "group": "Reactium.Content",
    "description": "<p>Retrieve one item of content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "current",
            "defaultValue": "false",
            "description": "<p>When true, get the currently committed content (not from revision system). Otherwise, construct the content from the provided history (branch and revision index).</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type (default index of latest revision)</p>"
          }
        ],
        "hooks": [
          {
            "group": "hooks",
            "type": "Async",
            "optional": false,
            "field": "before-content-clone",
            "description": "<p>Executed before the content is cloned.</p>"
          },
          {
            "group": "hooks",
            "type": "Async",
            "optional": false,
            "field": "content-clone",
            "description": "<p>Executed after the content has been cloned.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.delete(params,handle)",
    "title": "Content.delete()",
    "description": "<p>Delete content of a defined Type. To identify the content, you must provided the <code>type</code> object, and one of <code>slug</code>, <code>objectId</code>, or <code>uuid</code> of the content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ]
      }
    },
    "name": "Content.delete",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.labelBranch(params,handle)",
    "title": "Content.labelBranch()",
    "description": "<p>Clone a branch / specific region as a new branch.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": false,
            "field": "branchLabel",
            "description": "<p>New branch label.</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "current",
            "defaultValue": "false",
            "description": "<p>When true, get the currently committed content (not from revision system). otherwise, construct the content from the provided history (branch and revision index).</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          }
        ]
      }
    },
    "name": "Content.labelBranch",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.list(params)",
    "title": "Content.list()",
    "description": "<p>Get list of content of a specific Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "refresh",
            "defaultValue": "false",
            "description": "<p>skip cache check when true</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "optimize",
            "defaultValue": "false",
            "description": "<p>if optimize is true, and collection contains less than 1000 records, the entire set will be delivered in one page for application-side pagination.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "PUBLISHED",
            "description": "<p>&quot;PUBLISHED&quot; or &quot;DRAFT&quot; status of the content</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "orderBy",
            "defaultValue": "createdAt",
            "description": "<p>Field to order the results by.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "direction",
            "defaultValue": "descending",
            "description": "<p>Order &quot;descending&quot; or &quot;ascending&quot;</p>"
          },
          {
            "group": "params",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>The page or results to return.</p>"
          },
          {
            "group": "params",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Limit page results</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ]
      }
    },
    "name": "Content.list",
    "group": "Reactium.Content",
    "examples": [
      {
        "title": "Usage",
        "content": "import Reactium from 'reactium-core/sdk';\n\nReactium.Content.list({\n    \"type\": {\n        \"machineName\": \"article\"\n    },\n    \"orderBy\":\"title\",\n    \"direction\": \"ascending\",\n    \"limit\": 1,\n    \"status\": \"DRAFT\"\n});",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.publish(params,handle)",
    "title": "Content.publish()",
    "description": "<p>Set revision to current version and publish content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          },
          {
            "group": "history",
            "type": "Number",
            "optional": true,
            "field": "revision",
            "description": "<p>index in branch history to update (defaults to most recent in branch).</p>"
          }
        ]
      }
    },
    "name": "Content.publish",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.restore(params)",
    "title": "Content.restore()",
    "description": "<p>Restore deleted content of a defined Type (if still in recycle). To identify the content, you must provided the <code>type</code> object, and <code>objectId</code> of the content. Restores main record for content as well as any revisions.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "objectId",
            "description": "<p>The Parse object id of the deleted content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ]
      }
    },
    "name": "Content.restore",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.retrieve(params,handle)",
    "title": "Content.retrieve()",
    "description": "<p>Retrieve one item of content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "current",
            "defaultValue": "false",
            "description": "<p>When true, get the currently committed content (not from revision system). otherwise, construct the content from the provided history (branch and revision index).</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          },
          {
            "group": "history",
            "type": "Number",
            "optional": true,
            "field": "revision",
            "description": "<p>index in branch history to retrieve (default index of latest revision)</p>"
          }
        ]
      }
    },
    "name": "Content.retrieve",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.revisions(params,handle)",
    "title": "Content.revisions()",
    "description": "<p>Retrieve revisions history of some content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "Boolean",
            "optional": true,
            "field": "current",
            "defaultValue": "false",
            "description": "<p>When true, get the currently committed content (not from revision system). otherwise, construct the content from the provided history (branch and revision index).</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The objectId for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid for the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          }
        ]
      }
    },
    "name": "Content.revisions",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.save(content,permissions,handle)",
    "title": "Content.save()",
    "description": "<p>Create/Update content of a defined Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>The content to create or update. Requires type and slug, but can contain any properties defined by content type editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "permissions",
            "description": "<p>(new content only) List of permission objects. After creation, use <code>Content.setPermissions()</code></p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "content": [
          {
            "group": "content",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "content",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the content. (Required for creation.)</p>"
          },
          {
            "group": "content",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the new content. (Required for creation. Used only for lookups on existing content.)</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "permission": [
          {
            "group": "permission",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>'read' or 'write'</p>"
          },
          {
            "group": "permission",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'role', 'user' or 'public'</p>"
          },
          {
            "group": "permission",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>objectId of user if type='user'</p>"
          },
          {
            "group": "permission",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of role if type='role'</p>"
          },
          {
            "group": "permission",
            "type": "Boolean",
            "optional": true,
            "field": "allow",
            "defaultValue": "true",
            "description": "<p>true to allow permission, false to remove permission</p>"
          }
        ]
      }
    },
    "name": "Content.save",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.schedule(params,handle)",
    "title": "Content.schedule()",
    "description": "<p>Schedule the publishing / unpublishing of content. If <code>history</code> is provided, that revision will be made current and published on optional <code>sunrise</code>. On optional <code>sunset</code>, the current version of the content will be unpublished. The requesting user must have publish and unpublish capabilities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "sunrise",
            "description": "<p>Optional ISO8601 + UTC Offset datetime string (moment.format()) for sunrise (publishing) of content. e.g. 2020-02-07T11:15:04-05:00</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to sunrise, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "sunset",
            "description": "<p>Optional ISO8601 + UTC Offset datetime string (moment.format()) for sunset (unpublishing) of content. e.g. 2020-02-07T11:15:04-05:00</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          },
          {
            "group": "history",
            "type": "Number",
            "optional": true,
            "field": "revision",
            "description": "<p>index in branch history to update (defaults to most recent in branch).</p>"
          }
        ]
      }
    },
    "name": "Content.schedule",
    "group": "Reactium.Content",
    "examples": [
      {
        "title": "Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nimport moment from 'moment';\n\nconst now = moment();\n\n// publish version 3 of master branch a month from now\n// unpublish the article in 2 months\nReactium.Content.schedule({\n    // identify content type\n    type: { machineName: 'article' },\n    // identify content by slug (or objectId, uuid)\n    slug: 'my-article',\n    // identify desired revision (latest master is default)\n    history: { branch: 'master', revision: 3 },\n\n    // sunrise timestamp\n    sunrise: now\n        .clone()\n        .add(1, 'month')\n        .format(),\n\n    // sunset timestamp\n    sunset: now\n        .clone()\n        .add(2, 'month')\n        .format(),\n});",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.search(collection,search,handle)",
    "title": "Content.search()",
    "name": "Content.search",
    "group": "Reactium.Content",
    "description": "<p>Search a content type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collection",
            "description": "<p>The content collection name or ContentType machineName value.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "search",
            "description": "<p>Search string or search configuration object.</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search string used in the cloud function. If empty, all objects in the collection are returned.</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "where",
            "description": "<p>Search a particular field in the collection where the field includes the entire search string. Use in conjunction with <code>params.search</code> string to reduce the number of results returned from the server.</p>"
          },
          {
            "group": "params",
            "type": "Float",
            "optional": true,
            "field": "threshold",
            "defaultValue": "0",
            "description": "<p>Minimum score value. Used to shake out lower ranking search results.</p>"
          },
          {
            "group": "params",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>The page number of results to return. If value is less than 1 a single page is returned with all results.</p>"
          },
          {
            "group": "params",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Number of results to return per page.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Basic Usage:",
        "content": "const { results = {} } = await Reactium.Content.search('page', 'some page title');",
        "type": "json"
      },
      {
        "title": "Advanced Usage:",
        "content": "\n// Basic Usage equivelent\nconst { results = {} } = await Reactium.Content.search('page', { search: 'some page title' });\n\n// Search where and fetch all\nconst { results = {} } = await Reactium.Content.search('page', { page: -1, where: { title: 'page title' } });\n\n// Threshold\nconst { results = {} } = await Reactium.Content.search('page', { threshold: 1 });",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.setCurrent(params,handle)",
    "title": "Content.setCurrent()",
    "description": "<p>Take content from a specified branch or revision, and make it the &quot;official&quot; version of the content. If no <code>history</code> is param is specified the latest master branch revision will be used.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          },
          {
            "group": "history",
            "type": "Number",
            "optional": true,
            "field": "revision",
            "description": "<p>index in branch history to update (defaults to most recent in branch).</p>"
          }
        ]
      }
    },
    "name": "Content.setCurrent",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.setPermissions(content,permissions,handle)",
    "title": "Content.setPermissions()",
    "description": "<p>Set permissions to be used for Access Control List on existing content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>The content to create or update. Requires type and content objectId minimum.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "permissions",
            "description": "<p>(new content only) List of permission objects. After creation, use <code>Content.setPermissions()</code></p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "content": [
          {
            "group": "content",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "content",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse objectId of the content.</p>"
          },
          {
            "group": "content",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug of the content.</p>"
          },
          {
            "group": "content",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "permission": [
          {
            "group": "permission",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>'read' or 'write'</p>"
          },
          {
            "group": "permission",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>'role', 'user' or 'public'</p>"
          },
          {
            "group": "permission",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>objectId of user if type='user'</p>"
          },
          {
            "group": "permission",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name of role if type='role'</p>"
          },
          {
            "group": "permission",
            "type": "Boolean",
            "optional": true,
            "field": "allow",
            "defaultValue": "true",
            "description": "<p>true to allow permission, false to remove permission</p>"
          }
        ]
      }
    },
    "name": "Content.setPermissions",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.setStatus(params,handle)",
    "title": "Content.setStatus()",
    "description": "<p>Set revision to current version and set the status of the content. Only used to change status of non-published content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          },
          {
            "group": "params",
            "type": "Object",
            "optional": true,
            "field": "history",
            "description": "<p>revision history to retrieve, containing branch and revision index.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>one of the statuses associated with the content type.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ],
        "history": [
          {
            "group": "history",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "master",
            "description": "<p>the revision branch of current content</p>"
          },
          {
            "group": "history",
            "type": "Number",
            "optional": true,
            "field": "revision",
            "description": "<p>index in branch history to update (defaults to most recent in branch).</p>"
          }
        ]
      }
    },
    "name": "Content.setStatus",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.trash(params,handle)",
    "title": "Content.trash()",
    "description": "<p>Mark content for future deletion of a defined Type. To identify the content, you must provided the <code>type</code> object, and one of <code>slug</code>, <code>objectId</code>, or <code>uuid</code> of the content.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ]
      }
    },
    "name": "Content.trash",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Asynchronous",
    "url": "Content.unpublish(params,handle)",
    "title": "Content.unpublish()",
    "description": "<p>Unpublish current version of content, and set status to <code>DRAFT</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>See below</p>"
          },
          {
            "group": "Parameter",
            "type": "EventTarget",
            "optional": true,
            "field": "handle",
            "description": "<p>EventTarget to the component where the call was executed from.</p>"
          }
        ],
        "params": [
          {
            "group": "params",
            "type": "Mixed",
            "optional": false,
            "field": "type",
            "description": "<p>Type object, or type machineName</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>The unique slug for the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>The Parse object id of the content.</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>The uuid of the content.</p>"
          }
        ],
        "type": [
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "objectId",
            "description": "<p>Parse objectId of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "type",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          }
        ]
      }
    },
    "name": "Content.unpublish",
    "group": "Reactium.Content",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/Content/sdk/index.js",
    "groupTitle": "Reactium.Content"
  },
  {
    "type": "Function",
    "url": "ContentType.delete(options)",
    "title": "ContentType.delete()",
    "description": "<p>Delete a content type configuration. Note that this will not delete the content or its schema, only the content type configuration.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "options",
            "description": "<p>string uuid or Object containing</p>"
          }
        ],
        "options": [
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          },
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "namespace",
            "description": "<p>optional namespace. Will be used to derive the uuid from the machine name if the uuid is not known. By default, the current APIs content namespace will be used, and this will not be needed.</p>"
          }
        ]
      }
    },
    "name": "ContentType.delete",
    "group": "Reactium.ContentType",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/ContentType/sdk/index.js",
    "groupTitle": "Reactium.ContentType"
  },
  {
    "type": "Function",
    "url": "ContentType.retrieve(options)",
    "title": "ContentType.retrieve()",
    "description": "<p>Retrieve configuration for one content type. You must provide either the uuid or the machineName.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "options",
            "description": "<p>string uuid or Object containing</p>"
          }
        ],
        "options": [
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "uuid",
            "description": "<p>UUID of content type</p>"
          },
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "machineName",
            "description": "<p>the machine name of the existing content type</p>"
          },
          {
            "group": "options",
            "type": "String",
            "optional": true,
            "field": "namespace",
            "description": "<p>optional namespace. Will be used to derive the uuid from the machine name if the uuid is not known. By default, the current APIs content namespace will be used, and this will not be needed.</p>"
          }
        ]
      }
    },
    "name": "ContentType.retrieve",
    "group": "Reactium.ContentType",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/ContentType/sdk/index.js",
    "groupTitle": "Reactium.ContentType"
  },
  {
    "type": "Function",
    "url": "ContentType.save(id,type)",
    "title": "ContentType.save()",
    "description": "<p>Save a content type definition.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>'new' or the uuid of the type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "type",
            "description": "<p>object containing the <code>type</code> label, <code>fields</code> object, <code>regions</code> object, and <code>meta</code> object for a content type.</p>"
          }
        ]
      }
    },
    "name": "ContentType.save",
    "group": "Reactium.ContentType",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/ContentType/sdk/index.js",
    "groupTitle": "Reactium.ContentType"
  },
  {
    "type": "Function",
    "url": "ContentType.types()",
    "title": "ContentType.types()",
    "description": "<p>Get list of content types with the type name, uuid, and label from Actinium</p>",
    "name": "ContentType.types",
    "group": "Reactium.ContentType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "refresh",
            "description": "<p>Retrieve a fresh list of ContentType objects.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "schema",
            "description": "<p>Include the Collection schema object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/ContentType/sdk/index.js",
    "groupTitle": "Reactium.ContentType"
  },
  {
    "type": "Function",
    "url": "Handle.get(id)",
    "title": "Handle.get()",
    "description": "<p>Get a specific imperative handle reference, by object path (id). If id is full object path to the handle, returns a React reference if it exists, otherwise <code>undefined</code>. If id is partial object path, returns object containing one or more references if the path exists, otherwise 'undefined'.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "id",
            "description": "<p>Array of properties, or <code>.</code> separated object path. e.g. ['path','to','handle'] or 'path.to.handle'</p>"
          }
        ]
      }
    },
    "name": "Handle.get",
    "group": "Reactium.Handle",
    "examples": [
      {
        "title": "CountList.js",
        "content": "import React from 'react';\nimport Counter from './Counter';\nimport CounterControl from './CounterControl';\n const CountList = props => {\n    return (\n        <>\n            <Counter id='1'/>\n            <Counter id='2'/>\n            <CounterControl />\n        </>\n    );\n};\n export default CountList;",
        "type": "json"
      },
      {
        "title": "Counter.js",
        "content": "import React, { useState } from 'react';\nimport { useRegisterHandle } from 'reactium-core/sdk';\n const Counter = ({id = 1}) => {\n    const [count, setCount] = useState(Number(id));\n     // hook form of Handle.register and Handle.unregister\n    // handles ref creation for you\n    useRegisterHandle(['counter', id], () => ({\n        increment: () => setCount(count + 1),\n    }), [count]);\n     return (\n        <div>\n            <h1>Counter {id}</h1>\n            Count: {count}\n        </div>\n    );\n};\n export default Counter;",
        "type": "json"
      },
      {
        "title": "CounterControl.js",
        "content": "import React from 'react';\nimport Reactium from 'reactium-core/sdk';\n const CounterControl = () => {\n   // get object with all handles in the \"counter\" partial path\n    const handles = Reactium.Handle.get('counter');\n     const click = () => {\n       // equivalent to getting handle 'counter.1' and `counter.2` separately\n       // loop through all counters and call increment on click\n        Object.values(handles).forEach(({current}) => current.increment())\n    };\n     return (\n        <div>\n            <h1>CounterControl</h1>\n            <button onClick={click}>Increment All Counters</button>\n        </div>\n    );\n};\n export default CounterControl;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/handle/index.js",
    "groupTitle": "Reactium.Handle"
  },
  {
    "type": "Function",
    "url": "Handle.list()",
    "title": "Handle.list()",
    "description": "<p>Get full object containing all current reference handles.</p>",
    "name": "Handle.list",
    "group": "Reactium.Handle",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/handle/index.js",
    "groupTitle": "Reactium.Handle"
  },
  {
    "type": "Function",
    "url": "Handle.register(id,ref)",
    "title": "Handle.register()",
    "description": "<p>Register an imperative handle reference. See <code>useRegisterHandle()</code> React hook for easier pattern for functional components.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "id",
            "description": "<p>Array of properties, or <code>.</code> separated object path. e.g. ['path','to','handle'] or 'path.to.handle'</p>"
          },
          {
            "group": "Parameter",
            "type": "Ref",
            "optional": false,
            "field": "ref",
            "description": "<p>React reference created with <code>React.createRef()`` or </code>React.useRef()`.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "update",
            "defaultValue": "true",
            "description": "<p>Update <code>useHandle</code> subscribers of this handle id.</p>"
          }
        ]
      }
    },
    "name": "Handle.register",
    "group": "Reactium.Handle",
    "examples": [
      {
        "title": "MyControllableComponent.js",
        "content": "import React, {useEffect, useState, useRef} from 'react';\nimport Reactium from 'reactium-core/sdk';\n// This component is externally controllable on registered handle\n// with id: 'controlled.handle' or ['controlled', 'handle']\nexport default () => {\nconst [count, setCount] = useState(1);\nconst increment = () => setCount(count + 1);\nconst ref = useRef({\n    increment,\n});\n useEffect(() => {\n    Reactium.register('controlled.handle', ref);\n    return () => Reactium.unregister('controlled.handle');\n}, [count]);\n return (<div>Count is {count}</div>);\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/handle/index.js",
    "groupTitle": "Reactium.Handle"
  },
  {
    "type": "Function",
    "url": "Handle.subscribe(cb)",
    "title": "Handle.subscribe()",
    "description": "<p>Subscribe to changes in imperative handle references (registrations and unregistrations). Returns unsubscribe function.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "cb",
            "description": "<p>callback to be called when a handle is registered or unregistered</p>"
          }
        ]
      }
    },
    "name": "Handle.subscribe",
    "group": "Reactium.Handle",
    "examples": [
      {
        "title": "MyComponent.js",
        "content": "import React, {useState, useEffect} from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport op from 'object-path'\nexport default () => {\nconst [handle, updateHandle] = useState(Reactium.Handle.get('path.to.handle'));\nuseEffect(() => Reactium.Handle.subscribe(() => {\n    const h = Reactium.Handle.get('path.to.handle');\n    if (handle.current !== h.current) updateHandle(h);\n}), []);\n const doSomething = () => {\n    if (op.has(handle, 'current.action')) handle.current.action;\n};\n return (<button onClick={doSomething}>Some Action</button>);\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/handle/index.js",
    "groupTitle": "Reactium.Handle"
  },
  {
    "type": "Function",
    "url": "Handle.unregister(id)",
    "title": "Handle.unregister()",
    "description": "<p>Unregister an imperative handle reference. See <code>Handle.register()</code> for example usage.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "id",
            "description": "<p>Array of properties, or <code>.</code> separated object path. e.g. ['path','to','handle'] or 'path.to.handle'</p>"
          }
        ]
      }
    },
    "name": "Handle.unregister",
    "group": "Reactium.Handle",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/handle/index.js",
    "groupTitle": "Reactium.Handle"
  },
  {
    "type": "Objectt",
    "url": "Reactium.Handle",
    "title": "Handle",
    "name": "Reactium.Handle",
    "description": "<p>Similar concept to an imperative handle created when using <code>React.forwardRef()</code> and the <code>useImperativeHandle()</code> React hook. Reactium provides the <code>Reactium.Handle</code> object to manage references created in your components to allow imperative control of your component from outside the component. This is used when you wish to change the internal state of your component from outside using a technique other than changing the component <code>props</code> (i.e. declarative control).</p> <p>This technique makes use of references created with <code>React.createRef()</code> or the <code>useRef()</code> hook for functional components. The developer can then assign the <code>current</code> property of this reference to be an object containing methods or callbacks (i.e. methods that can invoke <code>this.setState()</code> or the update callback returned by <code>useState()</code> hook) that will cause the state of the component to change (and rerender).</p> <p>By registering this &quot;handle reference&quot; on the <code>Reactium.Handle</code> singleton, other distant components can exercise imperative control over your component.</p> <p>For developers that prefer the use of React hooks, Reactium provides two hooks for your use: <code>useRegisterHandle()</code> and <code>useHandle()</code> to register and use these handles respectively.</p>",
    "group": "Reactium.Handle",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/handle/index.js",
    "groupTitle": "Reactium.Handle"
  },
  {
    "type": "Function",
    "url": "Hook.flush(name)",
    "title": "Hook.flush()",
    "name": "Hook.flush",
    "description": "<p>Clear all registered callbacks for a hook.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the hook name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "async",
            "description": "<p>'async' or 'sync' hooks</p>"
          }
        ]
      }
    },
    "group": "Reactium.Hook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Function",
    "url": "Hook.list()",
    "title": "Hook.list()",
    "name": "Hook.list",
    "description": "<p>Register a hook callback.</p>",
    "group": "Reactium.Hook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Function",
    "url": "Hook.register(name,callback,order,id)",
    "title": "Hook.register()",
    "name": "Hook.register",
    "description": "<p>Register a hook callback.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the hook name</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>async function (or returning promise) that will be called when the hook is run. The hook callback will receive any parameters provided to Hook.run, followed by a context object (passed by reference to each callback).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "defaultValue": "Enums.priority.neutral",
            "description": "<p>order of which the callback will be called when this hook is run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>the unique id. If not provided, a uuid will be generated</p>"
          }
        ]
      }
    },
    "group": "Reactium.Hook",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nReactium.Hook.register('plugin-init', async context => {\n// mutate context object asynchrounously here\n    console.log('Plugins initialized!');\n}, Enums.priority.highest);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Function",
    "url": "Hook.registerSync(name,callback,order,id)",
    "title": "Hook.registerSync()",
    "name": "Hook.registerSync",
    "description": "<p>Register a sync hook callback.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the hook name</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>function returning promise that will be called when the hook is run. The hook callback will receive any parameters provided to Hook.run, followed by a context object (passed by reference to each callback).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "defaultValue": "Enums.priority.neutral",
            "description": "<p>order of which the callback will be called when this hook is run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>the unique id. If not provided, a uuid will be generated</p>"
          }
        ]
      }
    },
    "group": "Reactium.Hook",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nReactium.Hook.registerSync('my-sync-hook', context => {\n    // mutate context object synchrounously here\n    console.log('my-sync-hook run!');\n}, Enums.priority.highest);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Function",
    "url": "Hook.run(name,...params)",
    "title": "Hook.run()",
    "name": "Hook.run",
    "description": "<p>Run hook callbacks.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the hook name</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "...params",
            "description": "<p>any number of arbitrary parameters (variadic)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>context object passed to each callback (after other variadic parameters)</p>"
          }
        ]
      }
    },
    "group": "Reactium.Hook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Function",
    "url": "Hook.runSync(name,...params)",
    "title": "Hook.runSync()",
    "name": "Hook.runSync",
    "description": "<p>Run hook callbacks sychronously.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the hook name</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "...params",
            "description": "<p>any number of arbitrary parameters (variadic)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>context object passed to each callback (after other variadic parameters)</p>"
          }
        ]
      }
    },
    "group": "Reactium.Hook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Function",
    "url": "Hook.unregister(id)",
    "title": "Hook.unregister()",
    "name": "Hook.unregister",
    "description": "<p>Unregister a registered hook callback by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the unique id provided by Hook.register() or Hook.list()</p>"
          }
        ]
      }
    },
    "group": "Reactium.Hook",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/hook/index.js",
    "groupTitle": "Reactium.Hook"
  },
  {
    "type": "Hook",
    "url": "profile-avatar",
    "title": "profile-avatar",
    "description": "<p>Customize the profile avatar displayed in the admin sidebar widget.</p>",
    "name": "profile-avatar",
    "group": "Reactium.Hooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Valid HTML value for <code>&lt;img /&gt;</code> src property.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>The hook context object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Hook.register('profile-avatar', (avatar, context) => {\n    context['avatar'] = '/path/to/different/avatar.jpg';\n});",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ProfileWidget/hooks/index.js",
    "groupTitle": "Reactium.Hooks"
  },
  {
    "type": "Hook",
    "url": "profile-greeting",
    "title": "profile-greeting",
    "description": "<p>Customize the profile greeting displayed in the admin sidebar widget.</p>",
    "name": "profile-greeting",
    "group": "Reactium.Hooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "greeting",
            "description": "<p>Custom greeting string. Default: <code>Hello [username]</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>The hook context object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Hook.register('profile-greeting', (greeting, user, context) => {\n    context['greeting'] = String(greeting).replace('Hello', '¡Hola') + '!';\n}, Reactium.Enums.priority.lowest);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ProfileWidget/hooks/index.js",
    "groupTitle": "Reactium.Hooks"
  },
  {
    "type": "Hook",
    "url": "profile-role-name",
    "title": "profile-role-name",
    "description": "<p>Customize the profile role name displayed in the admin sidebar widget.</p>",
    "name": "profile-role-name",
    "group": "Reactium.Hooks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "greeting",
            "description": "<p>Custom greeting string. Default: <code>Hello [username]</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "context",
            "description": "<p>The hook context object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Hook.register('profile-role-name', (role, user, context) => {\n    switch (role) {\n        case 'super-admin':\n            role = 'Super Admin';\n            break;\n\n        case 'administrator':\n            role = 'Administrator';\n            break;\n    }\n    context['role'] = role;\n\n}, Reactium.Enums.priority.lowest);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ProfileWidget/hooks/index.js",
    "groupTitle": "Reactium.Hooks"
  },
  {
    "type": "Function",
    "url": "Plugin.isActive(ID)",
    "title": "Plugin.isActive()",
    "group": "Reactium.Plugin",
    "name": "Plugin.isActive",
    "description": "<p>Determine if a plugin ID is active.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>the plugin id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Plugin.isActive('Media');",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/plugin/index.js",
    "groupTitle": "Reactium.Plugin"
  },
  {
    "type": "Function",
    "url": "Plugin.list()",
    "title": "Plugin.list()",
    "group": "Reactium.Plugin",
    "name": "Plugin.list",
    "description": "<p>Return the list of registered plugins.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/plugin/index.js",
    "groupTitle": "Reactium.Plugin"
  },
  {
    "type": "Function",
    "url": "Plugin.register(ID,order)",
    "title": "Plugin.register()",
    "name": "Plugin.register",
    "description": "<p>Register a Reactium plugin.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>the plugin id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "defaultValue": "Enums.priority.neutral",
            "description": "<p>Priority of the plugin initialization respective to other existing plugins.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Plugin",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "import Reactium from 'reactium-core/sdk';\n\nconst newReducer = (state = { active: false }, action) => {\n    if (action.type === 'ACTIVATE') {\n        return {\n            ...state,\n            active: true,\n        };\n    }\n    return state;\n};\n\nconst register = async () => {\n    await Reactium.Plugin.register('myPlugin');\n    Reactium.Reducer.register('myPlugin', newReducer);\n};\n\nregister();",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/plugin/index.js",
    "groupTitle": "Reactium.Plugin"
  },
  {
    "type": "Function",
    "url": "Plugin.unregister(ID)",
    "title": "Plugin.unregister()",
    "name": "Plugin.unregister",
    "description": "<p>Unregister a Reactium plugin by unique id. This can only be called prior to the <code>plugin-dependencies</code> hook, or <code>Reactium.Plugin.ready === true</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>the plugin id</p>"
          }
        ]
      }
    },
    "group": "Reactium.Plugin",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "import Reactium from 'reactium-core/sdk';\n\n// Before Reactium.Plugin.ready\nReactium.Hook.register('plugin-dependencies', () => {\n    // Prevent myPlugin registration callback from occurring\n    Reactium.Plugin.unregister('myPlugin');\n    return Promise.resolve();\n}, Enums.priority.highest)",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/plugin/index.js",
    "groupTitle": "Reactium.Plugin"
  },
  {
    "type": "Function",
    "url": "Prefs.clear(key)",
    "title": "Prefs.clear()",
    "version": "0.0.17",
    "description": "<p>Clear one or more preferences.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>If specified as an object-path, will unset a specific preference path. Otherwise, all preferences will be cleared.</p>"
          }
        ]
      }
    },
    "name": "Prefs.clear",
    "group": "Reactium.Prefs",
    "examples": [
      {
        "title": "Example",
        "content": "import Reactium from 'reactium-core/sdk';\n\nReactium.Prefs.clear();",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/prefs/index.js",
    "groupTitle": "Reactium.Prefs"
  },
  {
    "type": "Function",
    "url": "Prefs.get(key,defaultValue)",
    "title": "Prefs.get()",
    "version": "0.0.17",
    "description": "<p>Get one or more preferences by object path.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>If specified as an object-path, will get a specific preference by this path. Otherwise, all preferences will be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "defaultValue",
            "description": "<p>The value to return if the preference has not been set.</p>"
          }
        ]
      }
    },
    "name": "Prefs.get",
    "group": "Reactium.Prefs",
    "examples": [
      {
        "title": "Example",
        "content": "import Reactium from 'reactium-core/sdk';\n\nconst myPref = Reactium.Prefs.get('my.object.path', { someDefault: 'foo' });",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/prefs/index.js",
    "groupTitle": "Reactium.Prefs"
  },
  {
    "type": "Function",
    "url": "Prefs.set(key,value)",
    "title": "Prefs.set()",
    "version": "0.0.17",
    "description": "<p>Get one or more preferences by object path.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The object-path to use to set the value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>The value to set to the key.</p>"
          }
        ]
      }
    },
    "name": "Prefs.set",
    "group": "Reactium.Prefs",
    "examples": [
      {
        "title": "Example",
        "content": "import Reactium from 'reactium-core/sdk';\n\nReactium.Prefs.set('my.object.path', { value: 'foo' });",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/prefs/index.js",
    "groupTitle": "Reactium.Prefs"
  },
  {
    "type": "Object",
    "url": "Reactium.Pulse.Task",
    "title": "Pulse.Task",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task",
    "description": "<p>Pulse Task object that performs the heavy lifting for the Pulse API.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.ID",
    "title": "Pulse.Task.ID",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.ID",
    "description": "<p>[read-only] The unique ID of the task. Returns: <code>String</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.attempt",
    "title": "Pulse.Task.attempt",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.attempt",
    "description": "<p>[read-only] The current attempt for the active task. Returns: <code>Number</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.delay",
    "title": "Pulse.Task.delay",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.attempt",
    "description": "<p>The current attempt for the active task. Returns: <code>Number</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.attempts",
    "title": "Pulse.Task.attempts",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.attempts",
    "description": "<p>The number of times a task will retry before it fails. Default: <code>-1</code>. You can set this value after the task has started.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.autostart",
    "title": "Pulse.Task.autostart",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.autostart",
    "description": "<p>[read-only] If the task autastarted upon creation. Default: <code>true</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.complete",
    "title": "Pulse.Task.complete",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.complete",
    "description": "<p>[read-only] Relevant only when the <code>repeat</code> property is higher than 1. Returns: <code>Boolean</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.count",
    "title": "Pulse.Task.count",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.count",
    "description": "<p>[read-only] The current number of times the task has succeeded. Returns: <code>Number</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.error",
    "title": "Pulse.Task.error",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.error",
    "description": "<p>[read-only] The current error message if applicable. Returns: <code>string</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.failed",
    "title": "Pulse.Task.failed",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.failed",
    "description": "<p>[read-only] Expresses if the current task has reached the maximum attempts. Returns: <code>Boolean</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.now()",
    "title": "Pulse.Task.now()",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.now",
    "description": "<p>Force run the task without waiting for it's delay. If the task is running this is a <code>noop</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.progress",
    "title": "Pulse.Task.progress",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.progress",
    "description": "<p>[read-only] The current amount of the repeat that has been completed. Relevant only when <code>repeat</code> is higher than 1. Returns: <code>0-1</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.repeat",
    "title": "Pulse.Task.repeat",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.repeat",
    "description": "<p>The current number of times to run the task. Returns: <code>Number</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.retry()",
    "title": "Pulse.Task.retry()",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.retry",
    "description": "<p>Force a retry of the task. Useful for when you want to manually handle retries within your callback function.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.start()",
    "title": "Pulse.Task.start()",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.start",
    "description": "<p>Start the task. Useful for when you want manually start a task in your callback function.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.status",
    "title": "Pulse.Task.status",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.status",
    "description": "<p>[read-only] The current status of the task. For comparing the status use the Pulse.ENUMS.STATUS values</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "const task = Pulse.get('MyTask');\nif (task.status === Pulse.ENUMS.STATUS.STOPPED) {\ntask.start();\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.stop()",
    "title": "Pulse.Task.stop()",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.stop",
    "description": "<p>Stop the task</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.timer",
    "title": "Pulse.Task.timer",
    "group": "Reactium.Pulse.Task",
    "name": "Reactium.Pulse.Task.timer",
    "description": "<p>[read-only] The reference to the current setTimeout. This value will change for each task run. Returns: <code>Number</code>.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse.Task"
  },
  {
    "type": "Function",
    "url": "Pulse.get(ID)",
    "title": "Pulse.get()",
    "group": "Reactium.Pulse",
    "name": "Pulse.get",
    "description": "<p>Retrieve a registered task. Returns a <code>Pulse.Task</code> object.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>The ID of the task.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "const task = Reactium.Pulse.get('MyTask');",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Pulse.register(ID,callback,options,params)",
    "title": "Pulse.register()",
    "group": "Reactium.Pulse",
    "name": "Pulse.register",
    "description": "<p>Register a new task. The callback function can be any function and supports returning a <code>Promise</code> from the function. If a <code>Promise</code> is rejected, or the callback function returns an <code>Error</code> object or <code>false</code>, a retry will be triggered if possible. In cases where no more retries can be executed, the task will fail.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>The unique ID of the task.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>The function to execute when the task is run. The first parameter passed to the callback function will be a reference to the current task object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>The <code>Pulse.Task</code> configuration object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "..attempts",
            "defaultValue": "-1",
            "description": "<p>Number of times to retry a task. By default the task will retry indefinitely.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "..autostart",
            "defaultValue": "true",
            "description": "<p>Start the task when it is registered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "..delay",
            "defaultValue": "1000",
            "description": "<p>Time in milliseconds before the task is run again. The task will not run again until after it's callback has been executed.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "..repeat",
            "defaultValue": "-1",
            "description": "<p>Number of times to repeat the task. Used in determining if the task is complete. A task with -1 as the value will never complete.</p>"
          },
          {
            "group": "Parameter",
            "type": "Arguments",
            "optional": true,
            "field": "params",
            "description": "<p>Additional parameters to pass to the callback function.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "import React, { useEffect } from 'react';\nimport Reactium from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n  const myFunction = (task, ...params) => {\n      // Do something here\n      const result = 1 === 2;\n\n      if (task.failed) { // Attempted the task 5 times\n          console.log('myFunction FAILED after', task.attempts, 'attempts with the following parameters:', ...params);\n      }\n\n      if (task.complete) { // Succeeded 5 times\n          console.log('myFunction COMPLETED after', task.attempts, 'attempts with the following parameters:', ...params);\n      }\n\n      // Trigger a retry because we're returning `false`\n      return result;\n  };\n\n  useEffect(() => {\n      // Register myFunction as a task\n      Reactium.Pulse.register('MyComponent', myFunction, {\n          attempts: 5,\n          delay: 1000,\n          repeat: 5\n      }, 'param 1', 'param 2', 'param 3');\n\n      // Unregister task when the component unmounts\n      return () => Reactium.Pulse.unregister('MyComponent');\n  }, [Reactium.Pulse]);\n\n  return <div>MyComponent</div>;\n};\n\nexport default MyComponent;",
        "type": "json"
      },
      {
        "title": "Persist",
        "content": "// For cases where you want the task to persist even after the component has\n// been unmounted or the route has changed causing a rerender:\n\n\nimport React, { useEffect } from 'react';\nimport Reactium from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n\n  useEffect(() => {\n      Reactium.Pulse.register('MyComponent', MyComponent.staticTask);\n  }, [Reactium.Pulse]);\n\n  return <div>MyComponent</div>\n};\n\nMyComponent.staticTask = (task, ...params) => new Promise((resolve, reject) => {\n  // Perform an async task\n  setTimeout(() => resolve('this is awkward...'), 10000);\n});\n\nexport default MyComponent;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Pulse.start(ID)",
    "title": "Pulse.start()",
    "group": "Reactium.Pulse",
    "name": "Pulse.start",
    "description": "<p>Start a registered task if it is stopped.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>The task unique ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Reactium.Pulse.start('MyTask');",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Pulse.startAll()",
    "title": "Pulse.startAll()",
    "group": "Reactium.Pulse",
    "name": "Pulse.startAll",
    "description": "<p>Start all stopped tasks.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Reactium.Pulse.startAll();",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Pulse.stop(ID)",
    "title": "Pulse.stop()",
    "group": "Reactium.Pulse",
    "name": "Pulse.stop",
    "description": "<p>Stop a registered task if it is running.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>The task unique ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "Reactium.Pulse.stop('MyTask');",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Pulse.stopAll()",
    "title": "Pulse.stopAll()",
    "group": "Reactium.Pulse",
    "name": "Pulse.stopAll",
    "description": "<p>Stop all running registered tasks.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Reactium.Pulse.stopAll();",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Pulse.unregister(ID)",
    "title": "Pulse.unregister()",
    "group": "Reactium.Pulse",
    "name": "Pulse.unregister",
    "description": "<p>Stop and unregister a task. If the task is running, it's current attempt will resolve before the task is removed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>The task unique ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "useEffect(() => {\n   // Register myFunction as a task\n   Reactium.Pulse.register('MyComponent', myFunction, {\n       attempts: 5,\n       delay: 1000,\n       repeat: 5\n   }, 'param 1', 'param 2', 'param 3');\n\n   // Unregister task when the component unmounts\n   return () => Reactium.Pulse.unregister('MyComponent');\n}, [Reactium.Pulse]);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Object",
    "url": "Reactium.Pulse",
    "title": "Pulse",
    "group": "Reactium.Pulse",
    "name": "Reactium.Pulse",
    "description": "<p>Simple interface for creating long or short polls.</p> <h3>Motivation</h3> <p>Often is the case where you find yourself sprinkling <code>setTimeout</code> or <code>setInterval</code> all over your code and before you know it, you have so many or rewrite the same structures over and over with a slight twist here and there. The Pulse API is designed to lighten the load on those situations and give a clean interface to easily create and manage polls.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Property",
    "url": "Reactium.Pulse.Task.reset()",
    "title": "Pulse.Task.reset()",
    "group": "Reactium.Pulse",
    "name": "Reactium.Pulse.Task.reset",
    "description": "<p>Resets the task's attempt count and run count. Useful for catastrophic failures in your callback function.</p>",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/pulse/index.js",
    "groupTitle": "Reactium.Pulse"
  },
  {
    "type": "Function",
    "url": "Block.list()",
    "title": "Block.list()",
    "group": "Reactium.RTE",
    "name": "Block.list",
    "description": "<p>Return a list of the registered blocks.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Block.register(id,options)",
    "title": "Block.register()",
    "group": "Reactium.RTE",
    "name": "Block.register",
    "description": "<p>Register a block level formatter.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the block.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>The configuration object for the block.</p>"
          }
        ],
        "Options": [
          {
            "group": "Options",
            "type": "Component",
            "optional": false,
            "field": "element",
            "description": "<p>The React component to render.</p>"
          },
          {
            "group": "Options",
            "type": "Boolean",
            "optional": true,
            "field": "inline",
            "defaultValue": "false",
            "description": "<p>Whether the block is inline or not.</p>"
          },
          {
            "group": "Options",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "100",
            "description": "<p>The sort order of the block. Useful when overwriting an existing block.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": "\n // reactium-hooks.js\n\nimport React from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor';\n\nconst Plugin = new RTEPlugin({ type: 'MyPlugin' });\n\nPlugin.callback = editor => {\n    // Register h6 block\n    Reactium.RTE.Block.register('h6', {\n        inline: false,\n        element: props => <h6 {...props} />,\n        order: 6\n    });\n\n    return editor;\n};\n\nexport default Plugin;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Block.unregister(id)",
    "title": "Block.unregister()",
    "group": "Reactium.RTE",
    "name": "Block.unregister",
    "description": "<p>Unregister a block level formatter.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the block.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Button.list()",
    "title": "Button.list()",
    "group": "Reactium.RTE",
    "name": "Button.list",
    "description": "<p>Return a list of the registered buttons.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Button.register(id,options)",
    "title": "Button.register()",
    "group": "Reactium.RTE",
    "name": "Button.register",
    "description": "<p>Register a button in the editor toolbar and/or sidebar.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the button.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>The configuration object for the button.</p>"
          }
        ],
        "Options": [
          {
            "group": "Options",
            "type": "Component",
            "optional": false,
            "field": "button",
            "description": "<p>The React component to render. If you have an <code>onClick</code> callback on your button, be sure to call <code>preventDefault()</code> so that the editor doesn't lose focus when the button is clicked.</p>"
          },
          {
            "group": "Options",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "100",
            "description": "<p>The sort order of the button. Useful whe overwriting an existing button.</p>"
          },
          {
            "group": "Options",
            "type": "Boolean",
            "optional": true,
            "field": "sidebar",
            "defaultValue": "false",
            "description": "<p>Whether the button should show up in the sidebar. The sidebar is used for formats and blocks that don't require text to be selected.</p>"
          },
          {
            "group": "Options",
            "type": "Boolean",
            "optional": true,
            "field": "toolbar",
            "defaultValue": "false",
            "description": "<p>Whether the button should show up in the toolbar. The toolbar is used for formats and blocks that require text to be selected.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": "// reactium-hooks.js\n\nimport React from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport { Button } from '@atomic-reactor/reactium-ui';\nimport { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor';\n\nconst Plugin = new RTEPlugin({ type: 'MyPlugin' });\n\nPlugin.callback = editor => {\n    // register toolbar button\n    Reactium.RTE.Button.register('bold', {\n        order: 110,\n        toolbar: true,\n        button: ({ editor, ...props }) => (\n            <Button\n                {...Reactium.RTE.ENUMS.PROPS.BUTTON}\n                {...props}\n                active={Reactium.RTE.isMarkActive(editor, 'bold')}\n                onClick={e => Reactium.RTE.toggleMark(editor, 'bold', e)}>\n                <span className='ico'>B</span>\n            </Button>\n        ),\n    });\n\n    return editor;\n};\n\nexport default Plugin;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Button.unregister(id)",
    "title": "Button.unregister()",
    "group": "Reactium.RTE",
    "name": "Button.unregister",
    "description": "<p>Unregister a button.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the button.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Color.list()",
    "title": "Color.list()",
    "group": "Reactium.RTE",
    "name": "Color.list",
    "description": "<p>Return a list of the registered colors.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Color.register(id,options)",
    "title": "Color.register()",
    "group": "Reactium.RTE",
    "name": "Color.register",
    "description": "<p>Register a color used in the block level text formatter configuration panel.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the color.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>The configuration object for the color.</p>"
          }
        ],
        "Options": [
          {
            "group": "Options",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Display label for the color.</p>"
          },
          {
            "group": "Options",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Valid CSS HEX color value.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "// reactium-hooks.js\n\nimport Reactium from 'reactium-core/sdk';\nimport { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor';\n\nconst Plugin = new RTEPlugin({ type: 'MyPlugin' });\n\nPlugin.callback = editor => {\n    // Register Red color\n    Reactium.RTE.Color.register('red', {\n        label: 'Red',\n        value: '#FF0000',\n    });\n\n    return editor;\n};\n\nexport default Plugin;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Color.unregister(id)",
    "title": "Color.unregister()",
    "group": "Reactium.RTE",
    "name": "Color.unregister",
    "description": "<p>Unregister a color.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the color.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Font.list()",
    "title": "Font.list()",
    "group": "Reactium.RTE",
    "name": "Font.list",
    "description": "<p>Return a list of the registered fonts.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Font.register(id,options)",
    "title": "Font.register()",
    "group": "Reactium.RTE",
    "name": "Font.register",
    "description": "<p>Register a font used in the block level text formatter configuration panel.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the font.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>The configuration object for the font.</p>"
          }
        ],
        "Options": [
          {
            "group": "Options",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Display label for the font.</p>"
          },
          {
            "group": "Options",
            "type": "Number[]",
            "optional": false,
            "field": "size",
            "description": "<p>List of font sizes your font to supports.</p>"
          },
          {
            "group": "Options",
            "type": "Object[]",
            "optional": false,
            "field": "weight",
            "description": "<p>List of font weights your font supports.</p>"
          },
          {
            "group": "Options",
            "type": "String",
            "optional": false,
            "field": "weight[label]",
            "description": "<p>Display label for the font-weight.</p>"
          },
          {
            "group": "Options",
            "type": "String",
            "optional": false,
            "field": "weight[family]",
            "description": "<p>Valid CSS font-family value.</p>"
          },
          {
            "group": "Options",
            "type": "Number",
            "optional": false,
            "field": "weight[weight]",
            "description": "<p>Valid CSS font-weight value.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": " // reactium-hooks.js\n\nimport React from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor';\n\nconst Plugin = new RTEPlugin({ type: 'MyPlugin' });\n\nPlugin.callback = editor => {\n    // Register Arial font\n    Reactium.RTE.Font.register('arial', {\n        label: 'Arial',\n        size: [10, 12, 14, 16, 18, 24, 32, 44, 56, 64, 72, 96],\n        weight: [\n            { label: 'Regular', family: 'Arial, sans-serif', weight: 400 },\n            { label: 'Semi-Bold', family: 'Arial, sans-serif', weight: 600 },\n            { label: 'Bold', family: 'Arial, sans-serif', weight: 800 },\n        ],\n    });\n\n    return editor;\n};\n\nexport default Plugin;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Font.unregister(id)",
    "title": "Font.unregister()",
    "group": "Reactium.RTE",
    "name": "Font.unregister",
    "description": "<p>Unregister a font.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the font.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Format.list()",
    "title": "Format.list()",
    "group": "Reactium.RTE",
    "name": "Format.list",
    "description": "<p>Return a list of the registered inline formats.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Format.register(id,options)",
    "title": "Format.register()",
    "group": "Reactium.RTE",
    "name": "Format.register",
    "description": "<p>Register an inline formatter.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the format.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>The configuration object for the format.</p>"
          }
        ],
        "Options": [
          {
            "group": "Options",
            "type": "Component",
            "optional": false,
            "field": "element",
            "description": "<p>The React component to render.</p>"
          },
          {
            "group": "Options",
            "type": "Boolean",
            "optional": true,
            "field": "inline",
            "defaultValue": "true",
            "description": "<p>Whether the element is inline or not.</p>"
          },
          {
            "group": "Options",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "100",
            "description": "<p>The sort order of the element. Useful when overwriting an existing format.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": " // reactium-hooks.js\n\nimport React from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor';\n\nconst Plugin = new RTEPlugin({ type: 'MyPlugin' });\n\nPlugin.callback = editor => {\n    // register bold formatter\n    Reactium.RTE.Format.register('bold', {\n        element: props => <strong {...props} />,\n        inline: true,\n    });\n\n    return editor;\n };\n\n export default Plugin;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Format.unregister(id)",
    "title": "Format.unregister()",
    "group": "Reactium.RTE",
    "name": "Format.unregister",
    "description": "<p>Unregister a inline formatter.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the formatter.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Hotkey.list()",
    "title": "Hotkey.list()",
    "group": "Reactium.RTE",
    "name": "Hotkey.list",
    "description": "<p>Return a list of the registered hotkeys.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Hotkey.register(id,options)",
    "title": "Hotkey.register()",
    "group": "Reactium.RTE",
    "name": "Hotkey.register",
    "description": "<p>Register a keyboard shortcut.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the hotkey.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>The configuration object for the hotkey.</p>"
          }
        ],
        "Options": [
          {
            "group": "Options",
            "type": "Array",
            "optional": false,
            "field": "keys",
            "description": "<p>The key combination. See <a href=\"https://www.npmjs.com/package/is-hotkey\">isHotkey</a> for available values.</p>"
          },
          {
            "group": "Options",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>The function to execute when the hotkey is pressed. If your function returns <code>false</code> no other matching hotkey definitions will be processed. The callback function receives a single paramter object containing a reference to the current <code>editor</code> and the keyboard <code>event</code>.</p>"
          },
          {
            "group": "Options",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "100",
            "description": "<p>The sort order of the hotkey. Useful when overwriting an existing hotkey or processing the same keys with a different set of rules.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": " // reactium-hooks.js\n\nimport React from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor';\n\nconst Plugin = new RTEPlugin({ type: 'MyPlugin' });\n\nPlugin.callback = editor => {\n    // register bold hotkey\n    Reactium.RTE.Hotkey.register('toggle-bold', {\n        keys: ['mod+b'],\n        callback: ({ editor, event }) => {\n            event.preventDefault();\n            Reactium.RTE.toggleMark(editor, Plugin.type);\n        },\n    });\n\n    return editor;\n};\n\nexport default Plugin;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Hotkey.unregister(id)",
    "title": "Hotkey.unregister()",
    "group": "Reactium.RTE",
    "name": "Hotkey.unregister",
    "description": "<p>Unregister a hotkey.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the hotkey.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Plugin.list()",
    "title": "Plugin.list()",
    "group": "Reactium.RTE",
    "name": "Plugin.list",
    "description": "<p>Return a list of the registered plugins.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Plugin.register(id,plugin)",
    "title": "Plugin.register()",
    "group": "Reactium.RTE",
    "name": "Plugin.register",
    "description": "<p>Register a RichTextEditor plugin.</p> <blockquote> <p><strong>Note:</strong> This function should be called within a <code>reactium-hooks.js</code> file.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the plugin.</p>"
          },
          {
            "group": "Parameter",
            "type": "RTEPlugin",
            "optional": false,
            "field": "plugin",
            "description": "<p>The plugin instance.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Plugin.unregister(id)",
    "title": "Plugin.unregister()",
    "group": "Reactium.RTE",
    "name": "Plugin.unregister",
    "description": "<p>Unregister a plugin.</p> <blockquote> <p><strong>Note:</strong> This function should be called within the editor plugin callback function.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the plugin.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Class",
    "url": "RTEPlugin(constructor)",
    "title": "RTEPlugin",
    "group": "Reactium.RTE",
    "name": "RTEPlugin",
    "description": "<p>RichTextEditor plugin instance used as the base when creating or extending RichTextEditor functionality.</p> <h2>Import</h2> <pre class=\"prettyprint\">import { RTEPlugin } from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor'; </code></pre> <blockquote> <p><strong>See:</strong> <a href=\"https://docs.slatejs.org/concepts/07-plugins\">Slate Plugins</a> for more information on how to augment the editor instance.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Constructor": [
          {
            "group": "Constructor",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>The plugin function where your editor customization and registrations are executed. The callback can be overwritten via the <code>.callback</code> property.</p>"
          },
          {
            "group": "Constructor",
            "type": "Number",
            "optional": true,
            "field": "order",
            "defaultValue": "100",
            "description": "<p>The sort order applied to your plugin when registering it with the RichTextEditor component. The order can be overwritten via the <code>.order</code> property.</p>"
          },
          {
            "group": "Constructor",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>The type is how your plugin is identified with the certain RichTextEditor functionality such as blocks and formats. The type cannot be changed outside of the constructor.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Plugin",
        "content": "// withBold.js\n\nimport React from 'react';\nimport Reactium from 'reactium-core/sdk';\nimport { Button } from '@atomic-reactor/reactium-ui';\nimport RTEPlugin from 'reactium_modules/@atomic-reactor/admin/registered-components/RichTextEditor/RTEPlugin';\n\nconst withBold = new RTEPlugin({ type: 'bold', order: 100 });\n\nwithBold.callback = editor => {\n    // Register inline formatter\n    Reactium.RTE.Format.register('bold', {\n        element: props => <strong {...props} />,\n    });\n\n    // Register toolbar button\n    Reactium.RTE.Button.register('bold', {\n        order: 110,\n        toolbar: true,\n        button: ({ editor, ...props }) => (\n            <Button\n                {...Reactium.RTE.ENUMS.PROPS.BUTTON}\n                active={Reactium.RTE.isMarkActive(editor, 'bold')}\n                onClick={e => Reactium.RTE.toggleMark(editor, 'bold', e)}\n                {...props}>\n                <span className='ico'>B</span>\n            </Button>\n        ),\n    });\n\n    // Register hotkeys\n    Reactium.RTE.Hotkey.register('bold', {\n        keys: ['mod+b'],\n        callback: ({ editor, event }) => {\n            event.preventDefault();\n            Reactium.RTE.toggleMark(editor, 'bold');\n        },\n    });\n\n    // Editor overrides\n    const { isInline } = editor;\n\n    // override the editor.isInline function to check for the 'bold' element type.\n    editor.isInline = element =>\n        element.type === 'bold' ? true : isInline(element);\n\n    // Return the updated editor object\n    return editor;\n};\n\nexport {\n    withBold\n};\n\n ...\n\n// reactium-hooks.js\n\nimport Reactium from 'reactium-core/sdk';\nimport { withBold } from './withBold';\nimport { withReact } from 'slate-react';\nimport { withHistory } from 'slate-history';\n\nReactium.Plugin.register('rte-plugins', Reactium.Enums.priority.lowest).then(\n    () => {\n        // Register my custom plugin - withBold\n        Reactium.RTE.Plugin.register('withBold', withBold);\n\n        // Register 3rd party Slate plugins\n        Reactium.RTE.Plugin.register('withReact', new RTEPlugin({ callback: withReact, order: 0 }));\n        Reactium.RTE.Plugin.register('withHistory', new RTEPlugin({ callback: withHistory, order: 1 }));\n    },\n);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "extend(id)",
    "title": "extend()",
    "group": "Reactium.RTE",
    "name": "extend",
    "description": "<p>Creates a new Registry object that can be used in RTE plugin development.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the extension.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "// reactium-hooks.js\n\nimport Reactium from 'reactium-core/sdk';\n\nReactium.Plugin.register('rte-plugins', Reactium.Enums.priority.lowest).then(\n    () => {\n        // Register RTE extension: Icon\n        Reactium.RTE.extend('Icon');\n    },\n);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "isBlockActive(editor,block)",
    "title": "isBlockActive()",
    "group": "Reactium.RTE",
    "name": "isBlockActive",
    "description": "<p>Determines if the block is active within the specified editor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Editor",
            "optional": false,
            "field": "editor",
            "description": "<p>Reference to a Slate Editor object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "block",
            "description": "<p>The id of the block.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/index.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "isMarkActive(editor,block)",
    "title": "isMarkActive()",
    "group": "Reactium.RTE",
    "name": "isMarkActive",
    "description": "<p>Determines if the mark is active within the specified editor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Editor",
            "optional": false,
            "field": "editor",
            "description": "<p>Reference to a Slate Editor object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "block",
            "description": "<p>The id of the mark.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/index.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "register(ext,id,options)",
    "title": "register()",
    "group": "Reactium.RTE",
    "name": "register",
    "description": "<p>Register elements on custom Registry objects.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "// reactium-hooks.js\n\nimport Reactium from 'reactium-core/sdk';\n\nReactium.Plugin.register('rte-plugins', Reactium.Enums.priority.lowest).then(\n    () => {\n        // Register RTE extension: Icon\n        Reactium.RTE.extend('Icon');\n\n        // Register a new Icon element\n        Reactium.RTE.register('Icon', 'FeatherChevronUp', {\n            set: 'Feather',\n            name: 'ChevronUp'\n        });\n    },\n);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "toggleBlock(editor,block,event)",
    "title": "toggleBlock()",
    "group": "Reactium.RTE",
    "name": "toggleBlock",
    "description": "<p>Toggles a block within the specified editor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Editor",
            "optional": false,
            "field": "editor",
            "description": "<p>Reference to a Slate Editor object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "block",
            "description": "<p>The id of the mark.</p>"
          },
          {
            "group": "Parameter",
            "type": "MouseEvent",
            "optional": true,
            "field": "event",
            "description": "<p>Used when clicking a toolbar/sidebar button to prevent default behavior so that the editor does not lose focus.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/index.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "toggleMark(editor,block,event)",
    "title": "toggleMark()",
    "group": "Reactium.RTE",
    "name": "toggleMark",
    "description": "<p>Toggles a mark (inline format) within the specified editor.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Editor",
            "optional": false,
            "field": "editor",
            "description": "<p>Reference to a Slate Editor object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "block",
            "description": "<p>The id of the mark.</p>"
          },
          {
            "group": "Parameter",
            "type": "MouseEvent",
            "optional": true,
            "field": "event",
            "description": "<p>Used when clicking a toolbar/sidebar button to prevent default behavior so that the editor does not lose focus.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/index.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "unregister(ext,id)",
    "title": "unregister()",
    "group": "Reactium.RTE",
    "name": "unregister",
    "description": "<p>Unregister elements from custom Registry objects.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "// reactium-hooks.js\n\nimport Reactium from 'reactium-core/sdk';\n\nReactium.Plugin.register('rte-plugins', Reactium.Enums.priority.lowest).then(\n    () => {\n        // Register RTE extension: Icon\n        Reactium.RTE.extend('Icon');\n\n        // Register a new Icon element\n        Reactium.RTE.register('Icon', 'FeatherChevronUp', {\n            set: 'Feather',\n            name: 'ChevronUp'\n        });\n\n        // Unregister an Icon element\n        Reactium.RTE.unregister('Icon', 'FeatherChevronUp');\n    },\n);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/_utils/sdk.js",
    "groupTitle": "Reactium.RTE"
  },
  {
    "type": "Function",
    "url": "Routing.get()",
    "title": "Routing.get()",
    "name": "Routing.get",
    "description": "<p>Get sorted array of all route objects.</p>",
    "group": "Reactium.Routing",
    "version": "0.0.0",
    "filename": ".core/sdk/routing/index.js",
    "groupTitle": "Reactium.Routing"
  },
  {
    "type": "Function",
    "url": "Routing.register(route)",
    "title": "Routing.register()",
    "description": "<p>Dynamically register a new React router route.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "route",
            "description": "<p>object to be used as properties of React Router <code>&lt;Route /&gt;</code> component, including:</p> <ol> <li>path - the routing pattern</li> <li>exact - true/false if the pattern should be matched exactly</li> <li>component - the React component to render on this route</li> <li>order - (special) the priority of this route in the list of routes (which route will resolve first)</li> <li>load - (special) high-order Redux action function (thunk) to run when this route is resolved (should return a promise)</li> <li>... any other property <code>&lt;Route /&gt;</code> component accepts</li> </ol> <h2>Important Note</h2> <p>Unless called in isomorphic javascript (ie. code executed both in browser and in node.js), these routes will not yield Server-Side-Rendered html in SSR mode. The browser will still render the route correctly (will not break the page), however the server will deliver a 404 status code on cold loads of the page (i.e. hard-refresh of the browser).</p>"
          }
        ]
      }
    },
    "name": "Routing.register",
    "group": "Reactium.Routing",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>unique id of the route</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "import React from 'react';\nimport op from 'object-path';\nimport Reactium, { useSelect } from 'reactium-core/sdk';\n\n// A new component subscribing to Redux state.myPlugin.name\nconst HelloYou = () => {\n    const name = useSelect(state => op.get(state, 'myPlugin.name', 'unknown'));\n    return {\n        <div>Hello {name}</div>\n    };\n};\n\n// A Redux-Thunk high-order action function (useful for async actions)\nconst loadAction = (params, search) => (dispatch, getState) => {\n    dispatch({\n        type: 'MY_NAME',\n        name: op.get(params, 'name', 'unknown'),\n    });\n\n    return Promise.resolve();\n};\n\n// Register new routing pattern '/hello-world/:name'\nconst routeId = Reactium.Routing.register({\n    path: '/hello-world/:name',\n    exact: true,\n    component: HelloYou,\n    load: loadAction,\n});\n\n// Register reducer to handle 'MY_NAME' action\nconst myReducer = (state = {name: 'unknown'}, action) => {\n    if (action.type === 'MY_NAME') return {\n        ...state,\n        name: action.name,\n    };\n    return state;\n};\nReactium.Plugin.register('myPlugin').then(() => {\n    Reactium.Reducer.register('myPlugin', myReducer);\n})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": ".core/sdk/routing/index.js",
    "groupTitle": "Reactium.Routing"
  },
  {
    "type": "Function",
    "url": "Routing.unregister(id)",
    "title": "Routing.unregister()",
    "name": "Routing.unregister",
    "description": "<p>Unregister an existing route, by id. Note: You can not unregister the 'NotFound' component. You can only replace it using the registering a NotFound component with Reactium.Component.register().</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the route id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "update",
            "defaultValue": "true",
            "description": "<p>update subscribers</p>"
          }
        ]
      }
    },
    "group": "Reactium.Routing",
    "version": "0.0.0",
    "filename": ".core/sdk/routing/index.js",
    "groupTitle": "Reactium.Routing"
  },
  {
    "type": "Class",
    "url": "Fullscreen",
    "title": "Fullscreen",
    "group": "Reactium.Utilities",
    "name": "Fullscreen",
    "description": "<p>Cross browser utility for toggling fullscreen mode.</p>",
    "parameter": {
      "fields": {
        "Event": [
          {
            "group": "Event",
            "type": "Event",
            "optional": false,
            "field": "fullscreenchange",
            "description": "<p>Triggered when the browser's fullscreen state changes.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": " // isExpanded()\n Reactium.Utils.Fullscreen.isExpanded();\n\n // isCollapsed()\n Reactium.Utils.Fullscreen.isCollapsed();\n\n // collapse()\n Reactium.Utils.Fullscreen.collapse();\n\n // expand()\n Reactium.Utils.Fullscreen.expand();\n\n // toggle()\n Reactium.Utils.Fullscreen.toggle();\n\n // Event: fullscreenchange\nimport React, { useEffect, useState } from 'react';\nimport Reactium from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n    const [state, setState] = useState(Reactium.Utils.Fullscreen.isExpanded());\n\n    const update = () => {\n        setState(Reactium.Utils.Fullscreen.isExpanded());\n    }\n\n    useEffect(() => {\n        // ssr safety\n        if (typeof document === 'undefined') return;\n\n        // listen for fullscreenchange\n        document.addEventListener('fullscreenchange', update);\n\n        // prevent memory leak\n        return () => {\n            document.removeEventListener('fullscreenchange', update);\n        };\n    });\n\n    return (<div>{state}</div>);\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Fullscreen/sdk.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Class",
    "url": "Fullscreen",
    "title": "Fullscreen",
    "group": "Reactium.Utilities",
    "name": "Fullscreen",
    "description": "<p>Cross browser utility for toggling fullscreen mode.</p>",
    "parameter": {
      "fields": {
        "Event": [
          {
            "group": "Event",
            "type": "Event",
            "optional": false,
            "field": "fullscreenchange",
            "description": "<p>Triggered when the browser's fullscreen state changes.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Usage:",
        "content": " // isExpanded()\n Reactium.Utils.Fullscreen.isExpanded();\n\n // isCollapsed()\n Reactium.Utils.Fullscreen.isCollapsed();\n\n // collapse()\n Reactium.Utils.Fullscreen.collapse();\n\n // expand()\n Reactium.Utils.Fullscreen.expand();\n\n // toggle()\n Reactium.Utils.Fullscreen.toggle();\n\n // Event: fullscreenchange\nimport React, { useEffect, useState } from 'react';\nimport Reactium from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n    const [state, setState] = useState(Reactium.Utils.Fullscreen.isExpanded());\n\n    const update = () => {\n        setState(Reactium.Utils.Fullscreen.isExpanded());\n    }\n\n    useEffect(() => {\n        // ssr safety\n        if (typeof document === 'undefined') return;\n\n        // listen for fullscreenchange\n        document.addEventListener('fullscreenchange', update);\n\n        // prevent memory leak\n        return () => {\n            document.removeEventListener('fullscreenchange', update);\n        };\n    });\n\n    return (<div>{state}</div>);\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/named-exports/fullscreen.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "Fullscreen.collapse()",
    "title": "Fullscreen.collapse()",
    "group": "Reactium.Utilities",
    "name": "Fullscreen.collapse",
    "description": "<p>Exits fullscreen mode.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Fullscreen/sdk.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "Fullscreen.expand()",
    "title": "Fullscreen.expand()",
    "group": "Reactium.Utilities",
    "name": "Fullscreen.expand",
    "description": "<p>Enters fullscreen mode.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Fullscreen/sdk.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "Fullscreen.isCollapsed()",
    "title": "Fullscreen.isCollapsed()",
    "group": "Reactium.Utilities",
    "name": "Fullscreen.isCollapsed",
    "description": "<p>Determines if the browser window is not fullscreen. Returns <code>true|false</code>.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Fullscreen/sdk.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "Fullscreen.isExpanded()",
    "title": "Fullscreen.isExpanded()",
    "group": "Reactium.Utilities",
    "name": "Fullscreen.isExpanded",
    "description": "<p>Determines if the browser window is fullscreen. Returns <code>true|false</code>.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Fullscreen/sdk.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "Fullscreen.toggle()",
    "title": "Fullscreen.toggle()",
    "group": "Reactium.Utilities",
    "name": "Fullscreen.toggle",
    "description": "<p>Enters or Exits fullscreen mode depending on the current fullscreen state.</p>",
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Fullscreen/sdk.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "ec(Component)",
    "title": "ec()",
    "description": "<p>ec, short for &quot;easy connect&quot; is a stripped down version of the redux <code>connect</code> function, which will provide your component with any Redux state properties under the name matching your component class (if applicable), as well as a <code>getState</code> function property.</p>",
    "name": "ec",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Component",
            "optional": false,
            "field": "Component",
            "description": "<p>the React component to be decorated with Redux state.</p>"
          },
          {
            "group": "Parameter",
            "type": "domain",
            "optional": true,
            "field": "domain",
            "description": "<p>domain or object path to get from state. if not provided, will used Component.name property.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Utilities",
    "examples": [
      {
        "title": "MyComponent/index.js",
        "content": "import MyComponent from './MyComponent';\nimport { ec } from '@atomic-reactor/use-select';\n\nexport ec(MyComponent);",
        "type": "json"
      },
      {
        "title": "MyComponent/MyComponent.js",
        "content": "import React, { Component } from 'react';\n\nclass MyComponent extends Component {\n    render() {\n        // getState prop provided by ec\n        const state = this.props.getState();\n        // foo property provided by ec\n        const foo = this.props.foo;\n\n        // Given that Redux store has an property MyComponent with property `foo`\n        return (\n            <div>\n                {state.MyComponent.foo}\n                {foo}\n            </div>\n        );\n    }\n}\n\nMyComponent.defaultProps = {\n    getState: () => {},\n    foo: null,\n};\n\nexport default MyComponent;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/use-select/lib/named-exports/redux.js",
    "groupTitle": "Reactium.Utilities"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.abbreviatedNumber(number)",
    "title": "Utils.abbreviatedNumber()",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "Utils.abbreviatedNumber",
    "description": "<p>Abbreviate a long number to a string.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>The number to abbreviate.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Utils.abbreviatedNumber(5000);\n// Returns: 5k\n\nReactium.Utils.abbreviatedNumber(500000);\n// Returns .5m",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.breakpoint(width)",
    "title": "Utils.breakpoint()",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "Utils.breakpoint",
    "description": "<p>Get the breakpoint of a window width.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "width",
            "defaultValue": "window.innerWidth",
            "description": "<p>Custom width to check. Useful if you have a resize event and want to skip the function from looking up the value again. Reactium.Utils.breakpoint(); // Returns: the current window.innerWidth breakpoint.</p> <p>Reactium.Utils.breakpoint(1024); // Returns: sm</p>"
          }
        ]
      }
    },
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.breakpoints()",
    "title": "Utils.breakpoints",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "Utils.breakpoints",
    "description": "<p>Get breakpoints from browser body:after psuedo element or <code>Utils.BREAKPOINTS_DEFAULT</code> if unset or node.</p> <table> <thead> <tr> <th>Breakpoint</th> <th>Range</th> </tr> </thead> <tbody> <tr> <td>xs</td> <td>0 - 640</td> </tr> <tr> <td>sm</td> <td>641 - 990</td> </tr> <tr> <td>md</td> <td>991 - 1280</td> </tr> <tr> <td>lg</td> <td>1281 - 1440</td> </tr> <tr> <td>xl</td> <td>1600+</td> </tr> </tbody> </table>",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Utils.cxFactory",
    "url": "Utils.cxFactory",
    "title": "Utils.cxFactory",
    "description": "<p>Create a CSS classname namespace (prefix) to use on one or more sub-class. Uses the same syntax as the <code>classnames</code> library.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>the CSS class prefix</p>"
          }
        ]
      }
    },
    "name": "Utils.cxFactory",
    "group": "Reactium.Utils",
    "examples": [
      {
        "title": "Usage:",
        "content": "import Reactium from 'reactium-core/sdk';\nimport React from 'react';\n\nconst MyComponent = props => {\n    const cx = Reactium.Utils.cxFactory('my-component');\n    const { foo } = props;\n\n    return (\n        <div className={cx()}>\n            <div className={cx('sub-1')}>\n                Classes:\n                .my-component-sub-1\n            </div>\n            <div className={cx('sub-2', { bar: foo === 'bar' })}>\n                Classes:\n                .my-component-sub-2\n                .my-component-foo\n            </div>\n        </div>\n    );\n};\n\nMyComponent.defaultProps = {\n    foo: 'bar',\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.isWindow(iframeWindow)",
    "title": "Utils.isWindow()",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "Utils.isWindow",
    "description": "<p>Determine if the window object has been set. Useful when developing for server side rendering.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Window",
            "optional": true,
            "field": "iframeWindow",
            "description": "<p>iframe window reference.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "Reactium.Utils.isWindow();\n// Returns: true if executed in a browser.\n// Returns: false if executed in node (server side rendering).",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Utils.registryFactory(name,idField)",
    "title": "Utils.registryFactory()",
    "description": "<p>Creates a new instance of a simple registry object. Useful for creating an SDK registry for allowing plugins to register &quot;things&quot;. e.g. components that will render inside a component, callbacks that will run.</p> <p>More documentation needed:</p> <ul> <li>register method: used to register an object on registry</li> <li>unregister method: used to unregister an object on registry</li> <li>list property: getter for list of registered objects</li> <li>protect method: called to prevent overwriting an id on registry</li> <li>unprotect method: called to again allow overwriting on id</li> </ul>",
    "name": "Utils.registryFactory",
    "group": "Reactium.Utils",
    "examples": [
      {
        "title": "Basic Reactium Usage",
        "content": "import Reactium from 'reactium-core/sdk';\n\n// trivial example of creation of new registry\nconst myRegistryPlugin = async () => {\n    await Reactium.Plugin.register('MyRegistryPlugin', Reactium.Enums.priority.highest);\n\n    // Using Plugin API to extend the SDK\n    // Adds a new registry to the SDK called `MyRegistry`\n    Reactium.MyRegistry = Reactium.Utils.registryFactory('MyRegistry');\n};\nmyRegistryPlugin();\n\n// trivial example of registry usage\nconst anotherPlugin = async () => {\n    await Reactium.Plugin.register('AnotherPlugin');\n\n    // register object with id 'anotherId' on registry\n    Reactium.MyRegistry.register('anotherId', {\n        foo: 'bar',\n    });\n\n    // iterate through registered items\n    Reactium.MyRegistry.list.forEach(item => console.log(item));\n\n    // unregister object with id 'anotherId'\n    Reactium.MyRegistry.unregister('anotherId');\n};\nanotherPlugin();",
        "type": "json"
      },
      {
        "title": "Basic Core Usage",
        "content": "import SDK from '@atomic-reactor/reactium-sdk-core';\nexport default SDK.Utils.registryFactory('MyRegistry');",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Utils.splitParts(parts)",
    "title": "Utils.splitParts()",
    "description": "<p>Breaks formatted string (or array of strings), into flat array of parts/nodes, inserting an object in array in the place of <code>%key%</code>. Useful for tokenizing a translation string, and getting an array that can easily be mapped into React components. Returns an object with <code>replace</code> and <code>value</code> methods. Call <code>replace(key,value)</code> method (chaining) as many times as necessary to replace all tokens. Call <code>value()</code> method to get the final array of Part objects. Call <code>reset()</code> to reset the SlipParts object to the original string without replacements for reuse.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "parts",
            "description": "<p>String containing tokens like <code>%key%</code> to be replaced.</p>"
          }
        ],
        "replace": [
          {
            "group": "replace",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>when calling <code>replace(key,value)</code>, the token <code>%${key}%</code> will be replaced with an Part object key-&gt;value pair.</p>"
          },
          {
            "group": "replace",
            "type": "Mixed",
            "optional": false,
            "field": "value",
            "description": "<p>the value to use in the key-&gt;pair replacement</p>"
          }
        ],
        "Part": [
          {
            "group": "Part",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>the key in the keypair</p>"
          },
          {
            "group": "Part",
            "type": "Mixed",
            "optional": false,
            "field": "value",
            "description": "<p>the value in the keypair</p>"
          }
        ]
      }
    },
    "name": "Utils.splitParts",
    "group": "Reactium.Utils",
    "examples": [
      {
        "title": "Usage",
        "content": "import React from 'react';\nimport Reactium, { __ } from 'reactium-core/sdk';\nimport moment from 'moment';\nimport md5 from 'md5';\n\nconst Gravatar = props => {\n    const { email } = props;\n    return (\n        <img\n            className='gravatar'\n            src={`https://www.gravatar.com/avatar/${md5(\n                email.toLowerCase(),\n            )}?size=50`}\n            alt={email}\n        />\n    );\n};\n\nexport default props => {\n    const description = __('%username% updated post %slug% at %time%');\n    const parts = Reactium.Utils.splitParts(description)[\n        ('email', 'slug', 'time')\n    ].forEach(key => parts.replace(key, props[key]));\n\n    return (\n        <span className='by-line'>\n            {parts.value().map(part => {\n                // arbitrary React component possible\n                const { key, value } = part;\n\n                switch (key) {\n                    case 'email': {\n                        return <Gravatar key={key} email={value} />;\n                    }\n                    case 'time': {\n                        return (\n                            <span key={key} className='time'>\n                                {moment(value).fromNow()}\n                            </span>\n                        );\n                    }\n                    default: {\n                        // plain string part\n                        return <span key={key}>{value}</span>;\n                    }\n                }\n            })}\n        </span>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.isBrowserWindow(iframeWindow)",
    "title": "Utils.isBrowserWindow()",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "isBrowserWindow",
    "description": "<p>If global window object exists, and does not have boolean isJSDOM flag, this context may be browser or electron. Use isElectronWindow() to know the latter.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Window",
            "optional": true,
            "field": "iframeWindow",
            "description": "<p>iframe window reference.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "import { isBrowserWindow } from 'reactium-core/sdk';\nisBrowserWindow();\n// Returns: true if executed in browser or electron.\n// Returns: false if executed on server.",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.isElectronWindow(iframeWindow)",
    "title": "Utils.isElectronWindow()",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "isElectronWindow",
    "description": "<p>Determine if window is an electron window. Useful for detecting electron usage.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Window",
            "optional": true,
            "field": "iframeWindow",
            "description": "<p>iframe window reference.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "import { isElectronWindow } from 'reactium-core/sdk';\nisElectronWindow();\n// Returns: true if executed in electron.\n// Returns: false if executed in node or browser.",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Reactium.Utils.isServerWindow(iframeWindow)",
    "title": "Utils.isServerWindow()",
    "version": "3.1.14",
    "group": "Reactium.Utils",
    "name": "isServerWindow",
    "description": "<p>If global window object exists, and has boolean isJSDOM flag, this context is a JSON window object (not in the browser or electron)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Window",
            "optional": true,
            "field": "iframeWindow",
            "description": "<p>iframe window reference.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Usage:",
        "content": "import { isServerWindow } from 'reactium-core/sdk';\nisServerWindow();\n// Returns: true if executed in server SSR context.\n// Returns: false if executed in browser or electron.",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/index.js",
    "groupTitle": "Reactium.Utils"
  },
  {
    "type": "Function",
    "url": "Zone.addComponent(component,capabilities,strict)",
    "title": "Zone.addComponent()",
    "name": "Zone.addComponent",
    "description": "<p>Register a component to a component zone.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "zone",
            "description": "<p>component object, determines what component renders in a zone, what order and additional properties to pass to the component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "capabilities",
            "description": "<p>list of capabilities to check before adding component to zone. Can also be added as property of zone component object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "strict",
            "defaultValue": "true",
            "description": "<p>true to only add component if all capabilities are allowed, otherwise only one capability is necessary</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "plugin-example.js",
        "content": "import SomeComponent from './path/to/SomeComponent';\nimport Reactium from 'reactium-core/sdk';\n\nReactium.Plugin.register('myPlugin').then(() => {\n    // When the component is initialized, `<SomeComponent>` will render in\n    // `\"zone-1\"`\n    Reactium.Zone.addComponent({\n        // Required - Component to render. May also be a string, if the component\n        // has been registered with Reactium.Component.register().\n        // @type {Component|String}\n        component: SomeComponent,\n\n        // Required - One or more zones this component should render.\n        // @type {String|Array}\n        zone: ['zone-1'],\n\n        // By default components in zone are rendering in ascending order.\n        // @type {Number}\n        order: {{order}},\n\n        // [Optional] - additional search subpaths to use to find the component,\n        // if String provided for component property.\n        // @type {[type]}\n        //\n        // e.g. If component is a string 'TextInput', uncommenting the line below would\n        // look in components/common-ui/form/inputs and components/general to find\n        // the component 'TextInput'\n        // paths: ['common-ui/form/inputs', 'general']\n\n        // [Optional] - Additional params:\n        //\n        // Any arbitrary free-form additional properties you provide below, will be provided as params\n        // to the component when rendered.\n        //\n        // e.g. Below will be provided to the MyComponent, <MyComponent pageType={'home'} />\n        // These can also be used to help sort or filter components, or however you have your\n        // component use params.\n        // @type {Mixed}\n        // pageType: 'home',\n    })\n})",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.addFilter(zone,filter,order)",
    "title": "Zone.addFilter()",
    "name": "Zone.addFilter",
    "description": "<p>Add a component zone filter function, used to filter which components will appear in <code>&lt;Zone /&gt;</code> Returns unique id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone this filter will apply to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>the filter function that will be passed each zone component object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "Enums.priority.neutral",
            "description": "<p>the priority your filter will take in list of filters in this zone</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "reactium-hooks.js",
        "content": "import Reactium from 'reactium-core/sdk';\n\nconst registerPlugin = async () => {\n    await Reactium.Plugin.register('MyVIPView');\n    const permitted = await Reactium.User.can(['vip.view']);\n\n    // Hide this component if current user shouldn't see vip components\n    const filter = component => {\n      return component.type !== 'vip' || !permitted\n    };\n\n    const id = Reactium.Zone.addFilter('zone-1', filter)\n}\nregisterPlugin();",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.addMapper(zone,mapper,order)",
    "title": "Zone.addMapper()",
    "name": "Zone.addMapper",
    "description": "<p>Add a component zone mapping function, used to augment the zone component object before passed to <code>&lt;Zone /&gt;</code>. Returns unique id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone this mapper will apply to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mapper",
            "description": "<p>the mapper function that will be passed each component object</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "Enums.priority.neutral",
            "description": "<p>the priority your mapper will take in list of mappers in this zone</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nimport React from 'react';\nimport VIPBadge from './some/path/Vip';\n// for this zone, if component is of type \"vip\", add a VIPBage component to the component\n// components children property\nconst mapper = (component) => {\n    if (component.type === 'vip')\n    component.children = [\n        <VIPBadge />\n    ];\n    return component;\n};\nconst id = Reactium.Zone.addMapper('zone-1', mapper)",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.addSort(zone,sortBy,reverse,order)",
    "title": "Zone.addSort()",
    "name": "Zone.addSort",
    "description": "<p>Add a component zone sort critera, used to augment the zone component object before passed to <code>&lt;Zone /&gt;</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone this sort will apply to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortBy",
            "defaultValue": "order",
            "description": "<p>zone component object property to sort the list of components by</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "reverse",
            "defaultValue": "false",
            "description": "<p>reverse sort order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "defaultValue": "Enums.priority.neutral",
            "description": "<p>the priority your sort will take in list of sorts in this zone</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\n\n// sort by zone component.type property\nReactium.Zone.addSort('zone-1', 'type')",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.getZoneComponent(zone,id)",
    "title": "Zone.getZoneComponent()",
    "name": "Zone.getZoneComponent",
    "description": "<p>Get the component from a zone by its id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone name to get components from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the registered component, specified in the object passed to Zone.addComponent() or returned by it.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.getZoneComponents(zone,raw)",
    "title": "Zone.getZoneComponents()",
    "name": "Zone.getZoneComponents",
    "description": "<p>Get existing registrations for a zone, by default goes through mapping, sorting, filtering. Add raw=true to get unadulterated list, even if they may not be renderable in the Zone. Returns the object used in Zone.addComponent()</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone name to get components from</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "raw",
            "defaultValue": "false",
            "description": "<p>Set to true to get all components, whether or not they are currently filtered, and without mapping or extra sorting.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.hasZoneComponent(zone,id)",
    "title": "Zone.hasZoneComponent()",
    "name": "Zone.hasZoneComponent",
    "description": "<p>Returns true if component with id is present in the zone.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone name to get components from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the registered component, specified in the object passed to Zone.addComponent() or returned by it.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.removeComponent(ID)",
    "title": "Zone.removeComponent()",
    "name": "Zone.removeComponent",
    "description": "<p>Removes a component added by <code>Zone.addComponent()</code> from a component zone by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>the unique component object id.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.removeFilter(id)",
    "title": "Zone.removeFilter()",
    "name": "Zone.removeFilter",
    "description": "<p>Remove filter functions for a component zone for this component.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the filter to remove</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nReactium.Zone.removeFilter(filterId);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.removeMapper(id)",
    "title": "Zone.removeMapper()",
    "name": "Zone.removeMapper",
    "description": "<p>Remove mapping functions for a zone..</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the mapper to remove from the zone</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nReactium.Zone.removeMapper(mapperId);",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.removeSort(componentName,zone)",
    "title": "Zone.removeSort()",
    "name": "Zone.removeSort",
    "description": "<p>Remove sort critera for a component zone for this component. This should be called only: //   * @apiParam {String} zone the zone to remove this sort from</p>",
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "Example Usage",
        "content": "import Reactium from 'reactium-core/sdk';\nReactium.Zone.removeSort('myPlugin', 'zone-1');",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.subscribe(zone,cb)",
    "title": "Zone.subscribe()",
    "name": "Zone.subscribe",
    "description": "<p>Subscribe to components added, removed, or updated in a particular rendering zone. Returns an unsubscribe function. Call this function to unsubscribe from changes.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>the zone to subscribe to</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "callback",
            "description": "<p>a function that will be called when a change occurs to zone.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "examples": [
      {
        "title": "useZoneComponents.js",
        "content": "import Reactium from 'reactium-core/sdk';\nimport { useState, useEffect } from 'react';\n\nexport const useZoneComponents = zone => {\n    const [components, updateComponents] = useState(Reactium.Zone.getZoneComponents(zone));\n\n    useEffect(() => Reactium.Zone.subscribe(zone, zoneComponents => {\n        updateComponents(zoneComponents)\n    }), [zone]);\n\n    return components;\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Function",
    "url": "Zone.updateComponent(id,updatedComponent)",
    "title": "Zone.updateComponent()",
    "name": "Zone.updateComponent",
    "description": "<p>Register a component to a component zone.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>the unique component object id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "updatedComponent",
            "description": "<p>updated zone component object, will be merged with existing.</p>"
          }
        ]
      }
    },
    "group": "Reactium.Zone",
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/index.js",
    "groupTitle": "Reactium.Zone"
  },
  {
    "type": "Object",
    "url": "Registry",
    "title": "Registry",
    "group": "Reactium",
    "name": "Registry",
    "description": "<p>Reactium uses a number of registry objects used to registering all sorts of objects that will be used elsewhere in the framework. New registry objects are generally instanciated as singletons on the overall SDK.</p> <p>There are many registry objects attached by default to the SDK, and developers can create new ones using <code>Utils.registryFactory()</code>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "listById",
            "description": "<p>get Object keyed by id of most recent (or highest order) registered objects, filtering out unregistered or banned objects.</p>"
          },
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "list",
            "description": "<p>get list of most recent (or highest order) registered objects, filtering out unregistered or banned objects.</p>"
          },
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "registered",
            "description": "<p>get list of all historically registrated objects, even duplicates, ordered by order property of object (defaults to 100).</p>"
          },
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "protected",
            "description": "<p>get list of protected registrations ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "unregistered",
            "description": "<p>get list of all existing registered objects ids that have been subsequently unregistered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "banned",
            "description": "<p>get list of all banned objects ids.</p>"
          },
          {
            "group": "Parameter",
            "type": "Getter",
            "optional": false,
            "field": "mode",
            "description": "<p>get current mode (Default Utils.Registry.MODES.HISTORY)</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "get",
            "description": "<p><code>reg.get(id,defaultValue)</code> pass the identifier of an object get that object from the registry. Optionally provide a default value if the id doesn't exist in the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "isProtected",
            "description": "<p>pass the identifier of an object to see if it has been protected</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "isRegistered",
            "description": "<p>pass the identifier of an object to see if it has been registered</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "isUnRegistered",
            "description": "<p>pass the identifier of an object to see is NOT registered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "isBanned",
            "description": "<p>pass the identifier of an object to see if it has been banned</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "ban",
            "description": "<p><code>reg.ban(id)</code> pass the identifier of an object to ban. Banned objects can not be registered and will not be show in list. Useful when you have code that needs to preempt the registration of an object from code you do not control. E.g. a plugin is introducing undesireable or disabled functionality</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "cleanup",
            "description": "<p><code>reg.cleanup(id)</code> pass the identifier of an object to be purged from historical registrations (i.e. free up memory) Automatically performed in mode Utils.Registry.CLEAN</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "protect",
            "description": "<p><code>reg.protect(id)</code> pass the identifier of an object to protect. Protected objects can not be overridden or cleaned up.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "register",
            "description": "<p><code>reg.register(id,data)</code> pass an identifier and a data object to register the object. The identifier will be added if it is not already registered (but protected) and not banned.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "unprotect",
            "description": "<p><code>reg.unprotect(id)</code> pass an identifier to unprotect an object</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "unregister",
            "description": "<p><code>reg.unregister(id)</code> pass an identifier to unregister an object. When in HISTORY mode (default), previous registration will be retained, but the object will not be listed. In CLEAN mode, the previous registrations will be removed, unless protected.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "flush",
            "description": "<p><code>reg.flush()</code> clear all registrations. Resets registry to newly constructed state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "subscribe",
            "description": "<p><code>reg.subscribe(cb,id)</code> Adds a callback to indicate changes to the registry. Callback is called on register, unregister, protect, unprotect, ban, cleanup, and flush. Returns unsubscribe function.</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "unsubscribe",
            "description": "<p><code>reg.unsubscribe(id)</code> unsubscribe a subscriber by id</p>"
          },
          {
            "group": "Parameter",
            "type": "Method",
            "optional": false,
            "field": "unsubscribeAll",
            "description": "<p><code>reg.unsubscribeAll()</code> unsubscribe all subscribers to changes made on the registry</p>"
          }
        ],
        "register": [
          {
            "group": "register",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the data object to be registered</p>"
          },
          {
            "group": "register",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>the object to be registered</p>"
          }
        ],
        "subscribe": [
          {
            "group": "subscribe",
            "type": "Function",
            "optional": false,
            "field": "cb",
            "description": "<p>Callback to be invoked on changes to the registry.</p>"
          },
          {
            "group": "subscribe",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>optional id of the callback, if you want to invoke unsubscribe manually by id, instead of the callback returned from subscribe method</p>"
          }
        ],
        "unsubscribe": [
          {
            "group": "unsubscribe",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the subscriber to unsubscribe</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/utils/registry.js",
    "groupTitle": "Reactium"
  },
  {
    "type": "RegisteredComponent",
    "url": "<AlertBox/>",
    "title": "AlertBox",
    "description": "<p>Dialog that displays an alert message.</p>",
    "name": "AlertBox",
    "group": "Registered_Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "buttons",
            "description": "<p>The action buttons to display.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "onClick",
            "description": "<p>Function to execute when the <code>ok</code> action button is clicked.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "message",
            "description": "<p>The Alert message. The message can be any valid <code>PropTypes.node</code> value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "defaultValue": "Alert",
            "description": "<p>The titlebar content.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "style",
            "description": "<p>React style object applied to the AlertBox wrapper div.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "useHookComponent() hook import",
        "content": "import { useHookComponent } from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n    const ConfirmBox = useHookComponent('AlertBox');\n    return (\n        <AlertBox\n          message='Permission Denied!',\n          onClick={() => console.log('ok'); }\n          title='Error'\n        />\n    );\n}",
        "type": "json"
      },
      {
        "title": "Simple Usage:",
        "content": "import AlertBox from 'components/Admin/registered-components/AlertBox';\n\n...\n\n<AlertBox\n  message='Permission Denied!',\n  onClick={() => console.log('ok'); }\n  title='Error'\n/>",
        "type": "json"
      },
      {
        "title": "Custom Button Label:",
        "content": "import AlertBox from 'components/Admin/registered-components/AlertBox';\n\n...\n\nconst buttons = { ...AlertBox.defaultProps.buttons };\nbuttons.ok.label = 'Aight den boi!';\n\n...\n\n<AlertBox\n  buttons={buttons}\n  message='Permission Denied!',\n  onClick={() => console.log('ok'); }\n  title='Error'\n/>",
        "type": "json"
      },
      {
        "title": "Import",
        "content": "import AlertBox from 'components/Admin/registered-components/AlertBox';",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/AlertBox/index.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "RegisteredComponent",
    "url": "<Blocker/>",
    "title": "Blocker",
    "description": "<p>Overlay that displays the Reactium UI <code>&lt;Spinner /&gt;</code> component and disables interaction with the rest of the UI.</p>",
    "name": "Blocker",
    "group": "Registered_Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "props",
            "description": "<p>See the documentation for the [http://ui.reactium.io/toolkit/components/spinner-molecule](Spinner component).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Basic Usage:",
        "content": "import Blocker from 'components/Admin/registered-components/Blocker';\n\n...\n\n<Blocker />",
        "type": "json"
      },
      {
        "title": "useHookComponent Example:",
        "content": "import { useHookComponent } from 'reactium-core/sdk';\n\nconst Component = props => {\n    const Blocker = useHookComponent('Blocker');\n\n    return <Blocker />\n};\n\nexport default Component;",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/Blocker/index.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "RegisteredComponent",
    "url": "<ConfirmBox/>",
    "title": "ConfirmBox",
    "description": "<p>Dialog that asks the user to confirm or cancel the current interaction.</p>",
    "name": "ConfirmBox",
    "group": "Registered_Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "buttons",
            "description": "<p>The action buttons to display.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "onConfirm",
            "description": "<p>Function to execute when the interaction is confirmed.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "onCancel",
            "description": "<p>Function to execute when the interaction is canceled.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": true,
            "field": "message",
            "defaultValue": "Are you sure?",
            "description": "<p>The confirmation message. The message can be any valid <code>PropTypes.node</code> value.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "style",
            "description": "<p>React style object applied to the ConfirmBox wrapper div.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "defaultValue": "Confirm",
            "description": "<p>The titlebar content.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "useHookComponent() hook import",
        "content": "import { useHookComponent } from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n    const ConfirmBox = useHookComponent('ConfirmBox');\n    return (\n        <ConfirmBox\n          title='Confirm Delete'\n          message='Are you sure?'\n          onCancel={() => console.log('No')}\n          onConfirm={() => console.log('Yes')}\n        />\n    );\n}",
        "type": "json"
      },
      {
        "title": "Simple Usage:",
        "content": "import ConfirmBox from 'components/Admin/registered-components/ConfirmBox';\n\n...\n\n<ConfirmBox\n  title='Confirm Delete'\n  message='Are you sure?'\n  onCancel={() => console.log('No')}\n  onConfirm={() => console.log('Yes')}\n/>",
        "type": "json"
      },
      {
        "title": "Custom Button Labels:",
        "content": "...\n\nconst buttons = { ...ConfirmBox.defaultProps.buttons };\nbuttons.no.label = 'Cancel';\nbuttons.yes.label = 'Proceed';\n\n...\n\n<ConfirmBox\n  buttons={buttons}\n  title='Confirm Delete'\n  message='Are you sure?'\n  onCancel={() => console.log('No')}\n  onConfirm={() => console.log('Yes')}\n/>",
        "type": "json"
      },
      {
        "title": "Custom Buttons:",
        "content": "import { Button } from '@atomic-reactor/reactium-ui';\n\n...\n\n// Display: No, Yes, Maybe buttons.\nconst buttons = { ...ConfirmBox.defaultProps.buttons };\nbuttons.maybe = (\n  <Button\n    size='xs'\n    onClick={() => console.log('maybe')}>\n    Maybe\n  </Button>\n);\n\n...\n\n<ConfirmBox\n  buttons={buttons}\n  title='Confirm Delete'\n  message='Are you sure?'\n  onCancel={() => console.log('No')}\n  onConfirm={() => console.log('Yes')}\n/>\n\n// Re-order buttons\nconst buttons = {\n  yes: ConfirmBox.defaultProps.buttons.yes,\n  no: ConfirmBox.defaultProps.buttons.no,\n};\n\n// Delete a button\nconst buttons = { ...ConfirmBox.defaultProps.buttons };\ndelete buttons.no;",
        "type": "json"
      },
      {
        "title": "Dependencies",
        "content": "import op from 'object-path';\nimport { useHandle } from 'reactium-core/sdk';\nimport { Button, Dialog } from '@atomic-reactor/reactium-ui';",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/ConfirmBox/index.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "RegisteredComponent",
    "url": "<IconPicker/>",
    "title": "IconPicker",
    "description": "<img src='https://reactium-cnd.sfo2.digitaloceanspaces.com/actinium-admin-IconPicker.png' style='width: 100%;' /> <p>Displays a list of the icons associated with the Reactium UI <code>&lt;Icon /&gt;</code> component.</p> <p>You can add icon sets to the component by appending to the <code>Icon.icons</code> static property.</p>",
    "name": "IconPicker",
    "group": "Registered_Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "defaultValue": "#666666",
            "description": "<p>The color of the icons.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "height",
            "defaultValue": "250",
            "description": "<p>The height in pixels of the picker.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "icons",
            "description": "<p>Manually set the icons object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "multiselect",
            "defaultValue": "false",
            "description": "<p>Whether to allow multiple icons to be selected.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Filter the icons by the icon name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "size",
            "defaultValue": "18",
            "description": "<p>The size (in pixels) of the icons.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "value",
            "description": "<p>Array of selected icons.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onChange",
            "description": "<p>Function to execute when the <code>change</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onMouseOut",
            "description": "<p>Function to execute when the <code>mouseout</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onMouseOver",
            "description": "<p>Function to execute when the <code>mouseover</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onResize",
            "description": "<p>Function to execute when the <code>resize</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onSearch",
            "description": "<p>Function to execute when the <code>search</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onSelect",
            "description": "<p>Function to execute when the <code>select</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onTouchStart",
            "description": "<p>Function to execute when the <code>touchstart</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onUnselect",
            "description": "<p>Function to execute when the <code>unselect</code> event is triggered.</p>"
          }
        ],
        "Method": [
          {
            "group": "Method",
            "type": "Function",
            "optional": false,
            "field": "setColor",
            "description": "<p>Set the <code>color</code> property.</p>"
          },
          {
            "group": "Method",
            "type": "Function",
            "optional": false,
            "field": "setIcons",
            "description": "<p>Set the <code>icons</code> property.</p>"
          },
          {
            "group": "Method",
            "type": "Function",
            "optional": false,
            "field": "setMultiselect",
            "description": "<p>Set the <code>multiselect</code> property.</p>"
          },
          {
            "group": "Method",
            "type": "Function",
            "optional": false,
            "field": "setSearch",
            "description": "<p>Set the <code>search</code> property.</p>"
          },
          {
            "group": "Method",
            "type": "Function",
            "optional": false,
            "field": "setSize",
            "description": "<p>Set the <code>size</code> property.</p>"
          },
          {
            "group": "Method",
            "type": "Function",
            "optional": false,
            "field": "setValue",
            "description": "<p>Set the <code>value</code> property.</p>"
          }
        ],
        "Event": [
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "change",
            "description": "<p>dispatched when the <code>value</code> property has changed.</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "mouseout",
            "description": "<p>dispatched when the mouse moves outside an icon bounding rectangle.</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "mouseover",
            "description": "<p>dispatched when the mouse moves over an icon bounding rectangle.</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "resize",
            "description": "<p>dispatched when the <code>size</code> property has changed.</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "search",
            "description": "<p>dispatched when the <code>search</code> property has changed.</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "select",
            "description": "<p>dispatched when an icon is clicked.</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "touchstart",
            "description": "<p>dispatched when an icon is touched (mobile only).</p>"
          },
          {
            "group": "Event",
            "type": "PickerEvent",
            "optional": false,
            "field": "unselect",
            "description": "<p>dispatched when an icon is unselected. Only applicable when <code>multiselect=true</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "useHookComponent() hook import",
        "content": "import { useHookComponent } from 'reactium-core/sdk';\n\nconst MyComponent = () => {\n    const IconPicker = useHookComponent('IconPicker');\n\n    const onChange = e => {\n        const { value } = e.target;\n        console.log(value);\n    };\n\n    return (\n        <IconPicker onChange={onChange} />\n    );\n}",
        "type": "json"
      },
      {
        "title": "Simple Usage:",
        "content": "import IconPicker from 'components/Admin/registered-components/IconPicker';\n\n...\n\n<IconPicker />",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/IconPicker/reactium-hooks.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "RegisteredComponent",
    "url": "<MenuItem/>",
    "title": "MenuItem",
    "description": "<p>Component used for Sidebar elements.</p>",
    "name": "MenuItem",
    "group": "Registered_Component",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "label",
            "description": "<p>The <code>{String}</code> or <code>{Component}</code> to display.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "false",
            "description": "<p>If the MenuItem should display as an active item.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "capabilities",
            "description": "<p>List of capabilities that are allowed to access the MenuItem.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "className",
            "description": "<p>React className to apply to the component container.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "count",
            "description": "<p>Indicator that shows a number of items relative to the MenuItem group.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "exact",
            "defaultValue": "true",
            "description": "<p>Used by the default isActive function to determine if the MenuItem is active using an exact route match.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": true,
            "field": "icon",
            "description": "<p>Display an Icon for the MenuItem. The icon can be any valid <code>PropTypes.node</code> value or any <code>&lt;Icon /&gt;</code> name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Unique id for the MenuItem. If the id is specified, it's content expanded/collapsed state is saved to localStorage.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "isActive",
            "description": "<p>Function that determines if the MenuItem is active. The <code>Router.match</code> and <code>Router.location</code> values are passed as parameters for the function.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onClick",
            "description": "<p>Function to execute when the MenuItem is clicked.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "route",
            "description": "<p>Navigate to the specified route when the MenuItem is clicked. <em>Note: the <code>onClick</code> function will execute as well.</em></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Tooltip to dislay for the MenuItem. If empty and the <code>label</code> is a <code>{String}</code> the <code>label</code> value is used.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Simple Usage:",
        "content": "import React from 'react';\nimport { useHookComponent } from 'reactium-core/sdk';\n\nconst SidebarWidget = () => (\n    const MenuItem = useHookComponent('MenuItem');\n    <MenuItem\n        label='Dashboard'\n        icon='Linear.Window'\n        route='/admin'\n    />\n);",
        "type": "json"
      },
      {
        "title": "Sub MenuItems:",
        "content": "import MenuItem from 'reactium_modules/@atomic-reactor/admin/registered-components/MenuItem';\n\nconst SidebarWidget = () => (\n  <MenuItem\n    icon='Linear.Equalizer'\n    id='admin-sidebar-settings'\n    label='Settings'>\n    <MenuItem\n      label='App'\n      route='/admin/settings/app'\n      title='Application settings'\n    />\n    <MenuItem\n      label='Email'\n      route='/admin/settings/email'\n      title='Email settings'\n    />\n  </MenuItem>\n);",
        "type": "json"
      },
      {
        "title": "Component Zone:",
        "content": "import MenuItem from 'reactium_modules/@atomic-reactor/admin/registered-components/MenuItem';\nimport { Zone } from 'reactium-core/sdk';\n\nconst SidebarWidget = () => (\n  <MenuItem\n    icon='Linear.Equalizer'\n    id='admin-sidebar-settings'\n    label='Settings' >\n    <Zone zone='admin-sidebar-settings' />\n  </MenuItem>\n);",
        "type": "json"
      },
      {
        "title": "Import",
        "content": "import MenuItem from 'reactium_modules/@atomic-reactor/admin/registered-components/MenuItem';",
        "type": "json"
      },
      {
        "title": "Dependencies",
        "content": "import { NavLink } from 'react-router-dom';\nimport { Collapsible, Icon, Prefs } from '@atomic-reactor/reactium-ui';\nimport Reactium, { useHandle, useSelect, useWindowSize } from '@atomic-reactor/use-select';",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/MenuItem/index.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "RegisteredComponent",
    "url": "<RichTextEditor/>",
    "title": "RichTextEditor",
    "name": "RichTextEditor",
    "group": "Registered_Component",
    "description": "<p>The RichTextEditor is a content editable text editor built on top of <a href=\"https://docs.slatejs.org\">Slate</a>. While Slate is a completely customizable framework for building rich text editors, we placed some framework around it to fit the Reactium model.</p> <h2>Basic Usage</h2> <p>The RichTextEditor is a registered component and can be imported two different ways:</p> <h3>1. Import Statement</h3> <pre class=\"prettyprint\">import RichTextEditor from 'components/Admin/registered-components/RichTextEditor'; </code></pre> <h3>2. useHookComponent Statement</h3> <pre class=\"prettyprint\">import { useHookComponent } from 'reactium-core/sdk'; </code></pre> <pre class=\"prettyprint\">const RichTextEditor = useHookComponent('RichTextEditor'); </code></pre> <h2>Extending</h2> <p>You can extend the RichTextEditor by registering a plugin with the <code>Reactium.RTE</code> SDK.</p> <h3>Creating A Plugin</h3> <p>When creating a plugin, you should start with the <code>RTEPlugin</code> class as your base by importing it into a <code>reactium-hooks.js</code> file.</p> <h4>1. Import RTEPlugin Class</h4> <pre class=\"prettyprint\">import RTEPlugin from 'components/Admin/registered-components/RichTextEditor/RTEPlugin'; </code></pre> <h4>2. Create New Plugin Instance</h4> <pre class=\"prettyprint\">const MyPlugin = new RTEPlugin({ type: 'my-plugin-type' }); </code></pre> <h4>3. Create Callback Function</h4> <p>The callback function is where the magic happens and is your chance to augment the Slate editor instance:</p> <pre class=\"prettyprint\">MyPlugin.callback = editor => { return editor; } </code></pre> <blockquote> <p><strong>Note:</strong> your callback function must return the <code>editor</code> object</p> </blockquote> <h4>4. Register Plugin</h4> <p>Now that your plugin is setup, register it with the Reactium.RTE SDK so that editors can use the plugin:</p> <pre class=\"prettyprint\">Reactium.RTE.Plugin.register('my-plugin', MyPlugin); </code></pre>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "blocks",
            "defaultValue": "Reactium.RTE.blocks",
            "description": "<p>Customize the block elements used in the current editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "buttons",
            "defaultValue": "Reactium.RTE.buttons",
            "description": "<p>Customize the button elements used in the current editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "colors",
            "defaultValue": "Reactium.RTE.colors",
            "description": "<p>Customize the colors used in the colors dropdown.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "fonts",
            "defaultValue": "Reactium.RTE.fonts",
            "description": "<p>Customize the fonts used in the font dropdown of the current editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "formats",
            "defaultValue": "Reactium.RTE.formats",
            "description": "<p>Customize the format elements used in the current editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "hotkeys",
            "defaultValue": "Reactium.RTE.hotkeys",
            "description": "<p>Customize the keyboard shortcuts used in the current editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "plugins",
            "defaultValue": "Reactium.RTE.plugins",
            "description": "<p>Customize the plugins used in the current editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "exclude",
            "description": "<p>Filter the list of blocks, buttons, and formats used in the current editor to exclude the specified elements.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "include",
            "description": "<p>Filter the list of blocks, buttons, and formats used in the current editor to only the specified elements.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "filter",
            "description": "<p>Filter the list of blocks, buttons, and formats used in the current editor with a custom filter function.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "className",
            "description": "<p>Class name to apply to the wrapper div.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "dragProps",
            "description": "<p>Properties applied to the configuration panel component.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "defaultValue": "UUID",
            "description": "<p>The unique id of the editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "defaultValue": "content",
            "description": "<p>The name of the editor to be used when inside a form.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "placeholder",
            "defaultValue": "Enter content...",
            "description": "<p>Text to display when the editor is empty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "panel",
            "defaultValue": "true",
            "description": "<p>Whether to include the properties panel component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sidebar",
            "defaultValue": "true",
            "description": "<p>Whether to include the sidebar component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "toolbar",
            "defaultValue": "true",
            "description": "<p>Whetehr to include the toolbar component.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "value",
            "description": "<p>The value of the editor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onBlur",
            "description": "<p>Function to call when the <code>blur</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onChange",
            "description": "<p>Function to call when the <code>change</code> event is triggered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "onFocus",
            "description": "<p>Function to call when the <code>focus</code> event is triggered.</p>"
          }
        ],
        "Event": [
          {
            "group": "Event",
            "type": "FocusEvent",
            "optional": false,
            "field": "blur",
            "description": "<p>Dispatched when the editor loses focus.</p>"
          },
          {
            "group": "Event",
            "type": "Event",
            "optional": false,
            "field": "change",
            "description": "<p>Dispatched when the editor is changed.</p>"
          },
          {
            "group": "Event",
            "type": "FocusEvent",
            "optional": false,
            "field": "focus",
            "description": "<p>Dispatched when the editor receives focus.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/app/components/Admin/registered-components/RichTextEditor/reactium-hooks.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "RegisteredComponent",
    "url": "Zone",
    "title": "Zone",
    "version": "3.1.19",
    "name": "Zone",
    "description": "<p>Component used to identify a &quot;zone&quot; in your application where any arbitrary components will render. Plugin components registered for this zone will dynamically render in the zone. Plugins can be registered statically in Reactium by creating a <code>plugin.js</code> file that exports a component definition (<code>arcli plugin component</code> to generate boilerplate for one), or using the Reactium SDK <code>Reactium.Zone.addComponent()</code> call.</p> <p>See also the Zone SDK for filtering, sorting, or mapping over plugin components for a zone.</p> <p>To generate an exportable plugin module, use the <code>arcli plugin module</code> command.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zone",
            "description": "<p>Identifier of the zone where plugin components will be rendered.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "passThrough",
            "defaultValue": "false",
            "description": "<p>When true, will provide a <code>components</code> property to children of Zone instead of rendering plugin components directly as siblings. This is useful when you wish to make plugin components available, but take more control over how they render.</p> <p>Example Passthrough Usage: Using the <code>jsx-parser</code> module, components could be provided to a JSXParser component, and the actual render of those components could be dictated by a string of JSX and data context provided by a CMS.</p>"
          },
          {
            "group": "Parameter",
            "type": "Mixed",
            "optional": false,
            "field": "...params",
            "description": "<p>any number of arbitrary parameters (variadic) can be provided to the Zone, and will be passed automatically as props on your plugin components when they are rendered.</p>"
          }
        ]
      }
    },
    "group": "Registered_Component",
    "examples": [
      {
        "title": "PageHeader.js",
        "content": "import React from 'react';\nimport { useHookComponent } from 'reactium-core/sdk';\n\n// PageHeader is not hard-coded, but adaptable by plugins\nexport default props => {\n    const Zone = useHookComponent('Zone');\n    return (\n        <div class='page-header'>\n            <Zone zone={'page-header'} />\n        </div>\n    );\n};",
        "type": "json"
      },
      {
        "title": "src/app/components/plugin-src/MyHeaderPlugin/index.js",
        "content": "import Reactium from 'reactium-core/sdk';\nimport MyHeaderWidget from './MyHeaderWidget';\n\nconst registerPlugin = async () => {\n    await Reactium.Plugin.register('MyHeaderPlugin');\n    Reactium.Zone.addComponent({\n        id: 'MyHeaderWidget',\n        zone: 'page-header',\n        component: MyHeaderWidget,\n    });\n};\nregisterPlugin();",
        "type": "json"
      },
      {
        "title": "src/app/components/plugin-src/MyHeaderPlugin/MyHeaderWidget.js",
        "content": "import React from 'react';\n\nexport default props => {\n   return (\n       <div class='my-header-widget'>\n           I will end up in the header zone\n       </div>\n   );\n};",
        "type": "json"
      }
    ],
    "filename": "node_modules/@atomic-reactor/reactium-sdk-core/lib/zone/Zone.js",
    "groupTitle": "Registered_Component"
  },
  {
    "type": "Function",
    "url": "__(text)",
    "title": "__()",
    "description": "<p>Wrap this around string literals to make them translateable with gettext Poedit utility. Run <code>arcli i18n</code> to extract strings to <code>src/reactium-translations/template.pot</code> by default.</p>",
    "name": "__",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StringLiteral",
            "optional": false,
            "field": "text",
            "description": "<p>the text to be translated. Important: this should not be a variable. It must be a string literal, or <code>arcli i18n</code> command will not be able to locate the string. This string may not be an ES6 template literal.</p>"
          }
        ]
      }
    },
    "group": "Translation",
    "examples": [
      {
        "title": "Usage",
        "content": "import React from 'react';\nimport { __ } = 'reactium-core/sdk';\n\nexport default () => {\n    return (\n        <div>{__('My Translatable string.')}</div>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/i18n.js",
    "groupTitle": "Translation"
  },
  {
    "type": "Function",
    "url": "_n(singular,plural,count)",
    "title": "_n()",
    "description": "<p>Wrap this around string literals to make them translateable with gettext Poedit utility. Run <code>arcli i18n</code> to extract strings to <code>src/reactium-translations/template.pot</code> by default.</p>",
    "name": "_n",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StringLiteral",
            "optional": false,
            "field": "singular",
            "description": "<p>the singular form text to be translated. Important: this should not be a variable. It must be a string literal, or <code>arcli i18n</code> command will not be able to locate the string. This string may not be an ES6 template literal.</p>"
          },
          {
            "group": "Parameter",
            "type": "StringLiteral",
            "optional": false,
            "field": "plural",
            "description": "<p>the plural form text to be translated. Important: this should not be a variable. It must be a string literal, or <code>arcli i18n</code> command will not be able to locate the string. This string may not be an ES6 template literal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>the number related to singular or plural string</p>"
          }
        ]
      }
    },
    "group": "Translation",
    "examples": [
      {
        "title": "Usage",
        "content": "import React from 'react';\nimport { _n } = 'reactium-core/sdk';\n\nexport default props => {\n    const count = props.count;\n    // singular / plural translation\n    const label = _n('%s thing', '%s things', count).replace('%s', count);\n    return (\n        <div>{label}</div>\n    );\n};",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": ".core/sdk/named-exports/i18n.js",
    "groupTitle": "Translation"
  }
] });
