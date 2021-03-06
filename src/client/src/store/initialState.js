
const initialState = {
    application: {
        stage: 'start'
    },
    documentation: {
        projectDoc: {}
    },
    server: {
        request: {
            activeCount: 0,
            method: 'none'
        },
        messages:[],
        messagesCounter: 0,
        packageVersion: 'unknown',
        projectDirectoryStatus: 'unknown',
        userProfile: {
            userName: null
        },
        gallery: {
            projects:[]
        }
    },
    desk: {
        isAvailableComponentsButtonActive: false,
        isComponentsHierarchyButtonActive: false,
        isQuickOptionsButtonActive: false,
        isEditMode: true,
        isLivePreviewMode: false,
        isDocumentMode: false,
        iframeWidth: '100%'
    },
    webSocket: {
        compilerStats: {}
    },
    deskPage: {
        selectedUmyId: null,
        selectedUmyIdToCopy: null,
        selectedUmyIdToCut: null,
        selectComponentCounter: 0,
        searchResult: null,
        isDomNodeInCurrentPage: false,
        inClipboard: null,
        clipboardMode: 'EMPTY_MODE',
        defaultsIndexMap: {},
        selectedAvailableComponentDefaults: [],
        selectedAvailableComponentName: null,
        previewComponentCounter: 0,
        previewModel: null,
        quickOptions:{
            focusedPathInProps: null
        },
        model: {},
        modelChangeCounter: 0,
        modelHistory: [],
        componentsTree:{},
        currentPageName: 'unknown',
        currentPagePath: 'unknown',
        currentPageIndex: 0,
        reloadPageCounter: 0,
        reloadPageModelCounter: 0,
        currentPageDomNodes:{}
    },
    modalComponentEditor: {
        isOpen: false,
        componentText: null,
        propsScript: null,
        sourceCode: null,
        componentName: null,
        componentGroup: null,
        documentMarkdown: null,
        sourceFilePath: null
    },
    modalComponentGenerator: {
        isOpen: false,
        step: 0,
        groupNames: [],
        groupName: null,
        componentName: null,
        generatorList: [],
        componentSourceDataObject: null,
        generatedComponentsCounter: 0
    },
    modalPageInfo: {
        isOpen: false,
        pageName: null,
        pagePath: null,
        pageScript: '',
        pageProps: [],
        pageTitle: null
    },
    modalProxySetup: {
        isOpen: false,
        urlValue: null
    },
    modalComponentVariant: {
        isOpen: false
    }
};

export default initialState;