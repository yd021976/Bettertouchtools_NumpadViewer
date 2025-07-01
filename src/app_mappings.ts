/**
 * Config of a key trigger
 */
export interface TriggerConfig {
  bttTriggerUUID: string;
  imgSrc: string;
  needHideMenu?: string;
  canInvokeWithClick?:boolean;
}

/**
 * Config of a numpad key for an app
 */
export interface KeyConfig {
  [key: string]: TriggerConfig;
}

/**
 * Config for a sigle app
 */
export interface AppConfig extends KeyConfig {}

/**
 * Config for all apps
 */
export interface AppMappings {
  [appName: string]: AppConfig;
}
/**
 * Apps shortcuts map to numpad
 */
export const __Mapping__: AppMappings = {
    "com.microsoft.VSCode": {
        "4": {
            bttTriggerUUID: "BBE9207D-ACFE-475D-949B-5DF4DBDA9098",
            imgSrc: "/vscode/fold_level_3.new.svg",
            needHideMenu: "0",
        },
        "5": {
            bttTriggerUUID: "3AFDACD6-EB4D-4141-AE2C-EFF47DD97564",
            imgSrc: "/vscode/fold.svg",
        },
        "7": {
            bttTriggerUUID: "279AE551-19F4-43CE-BF13-8759B9E3D683",
            imgSrc: "/vscode/debug-step-over.svg"
        },
        "8": {
            bttTriggerUUID: "433FAE11-5213-4895-BE75-638C32D25D4F",
            imgSrc: "/vscode/debug-step-into.svg"
        },
        "9": {
            bttTriggerUUID: "DFE05890-DBD1-4390-B5E5-83D59887884B",
            imgSrc: "/vscode/debug-step-out.svg"
        },
        "enter": {
            bttTriggerUUID: "677E017E-7F41-4E76-9E89-B8DC4457C777",
            needHideMenu: "1",
            imgSrc: "/vscode/debug-start.svg"
        },
        "plus": {
            bttTriggerUUID: "EC699E3D-9404-4F0D-A02A-593EBBCC07AE",
            imgSrc: "/vscode/debug-restart.svg"
        },
        "minus": {
            bttTriggerUUID: "5E756ACB-09F8-4DAE-BB14-6BCB105715AA",
            imgSrc: "/vscode/debug-stop.svg"
        },
    },
    "com.apple.mail": {
        "4": {
            bttTriggerUUID: "3D88945E-C712-4EBA-B1A9-98CD88EE8DCF",
            needHideMenu: "1",
            imgSrc: "/Mail/xmark.bin.svg"
        },
        "5": {
            bttTriggerUUID: "F5A56919-5998-42C8-A35A-4E9DF2C0470D",
            needHideMenu: "0",
            imgSrc: "/Mail/trash.slash.svg"
        },
    },
    "com.mcneel.rhinoceros.8": {
        "4": {
            bttTriggerUUID: "BFD30A1A-23D9-418C-88A9-0E98DEA99722",
            imgSrc: "/rhino/RotateView.png",
            canInvokeWithClick: false,
        },
        "5": {
            bttTriggerUUID: "101D1EF2-FFED-4118-998B-35C4846FE443",
            imgSrc: "/rhino/ZoomDynamic.png",
            canInvokeWithClick: false,
        },
        "6": {
            bttTriggerUUID: "F84FA462-1042-4B3E-B138-5FD4A76D69EA",
            imgSrc: "/rhino/Pan.png",
            canInvokeWithClick: false,
        },
    },
    "com.apple.iWork.Numbers": {
        "4": {
            bttTriggerUUID: "86895154-EE1F-4D9A-9178-33552CA30114",
            imgSrc: "/Numbers/copy_style.svg"
        },
        "5": {
            bttTriggerUUID: "BE2BA5BB-D392-4C25-8066-8DCCA2DFDE63",
            imgSrc: "/Numbers/paste_style.svg"
        },
        "6": {
            bttTriggerUUID: "1DA9364F-2343-49E8-821B-4B8EE69F82F8",
            imgSrc: "/Numbers/paintbrush.svg"
        },
        "7": {
            bttTriggerUUID: "75E777E9-C44E-415B-84B9-3799AC7CBF5E",
            imgSrc: "/Numbers/arrowshape.backward.circle.svg"
        },
        "8": {
            bttTriggerUUID: "731B04BD-211D-449C-885E-A58ED2536293",
            imgSrc: "/Numbers/arrowshape.forward.circle.svg"
        },
    },
    "com.apple.Safari": {
        "4": {
            bttTriggerUUID: "8AD17F0F-FBBE-4546-9C61-09D3EBD220D3",
            imgSrc: "/Safari/sidebar.leading.svg"
        },
        "5": {
            bttTriggerUUID: "5C1F9367-8A4A-4F82-88DA-C693D2E5E1C1",
            imgSrc: "/Safari/plus.app.fill.svg"
        },
        "6": {
            bttTriggerUUID: "FA0B8BB7-0F21-4B33-9931-704BC05B1800",
            imgSrc: "/Safari/xmark.square.fill.svg"
        },
        "7": {
            bttTriggerUUID: "05A35BC6-AFB2-45F8-988C-8540298EE81A",
            imgSrc: "/Numbers/arrowshape.backward.circle.svg"
        },
        "8": {
            bttTriggerUUID: "42203987-FD16-4B26-8FED-494D9D63A734",
            imgSrc: "/Numbers/arrowshape.forward.circle.svg"
        },
        "9": {
            bttTriggerUUID: "105AA00F-CD05-428B-B58F-AC0D42246DC7",
            imgSrc: "/Safari/square.on.square.svg"
        },
    }
};