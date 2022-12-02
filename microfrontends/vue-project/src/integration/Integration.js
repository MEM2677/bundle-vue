import axios from "axios";

function getDefaultOptions() {
    const token = getKeycloakToken()
    if (!token) return {}
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
}


function addAuthorizationRequestConfig(config = {}) {
    let defaultOptions = getDefaultOptions();

    return {
        ...config,
        ...defaultOptions
    }
}

function getKeycloakToken() {
    if (window && window.entando && window.entando.keycloak && window.entando.keycloak.authenticated) {
        return window.entando.keycloak.token
    }

    return ''
}


function getAPIUrl(config, serviceName) {
    const { systemParams } = JSON.parse(config);
    return systemParams.api[serviceName].url
}


export async function getData(config) {
    const responseObj = {}
   
    try {
        responseObj["res"] = await axios.get(`${getAPIUrl(config, 'simple-node-api')}/api/hello`, addAuthorizationRequestConfig())
    } catch (error) {
        responseObj["error"] = error.response.data
    }

    return responseObj
}




