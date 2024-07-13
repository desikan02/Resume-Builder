export const addSkill = (skill) => {
   //console.log(skill)
    return (dispatch) => {
        dispatch({
            type: "ADD_SKILL",
            payload: skill
        })
    }
}

export const removeSkill = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_SKILL",
            payload: index
        })
    }
}

export const manageFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: "MANAGE_FILE",
            payload: file
        })
    }
}

export const manageAbout = (about) => {
   // console.log(about)
    return (dispatch) => {
        dispatch({
            type: "MANAGE_ABOUT",
            payload: about
        })
    }
}
export const user = (user) => {
    console.log(user)
    return (dispatch) => {
        dispatch({
            type: "user",
            payload: user
        })
    }
}

export const manageProfile = (profile) => {

    console.log(profile)
    return (dispatch) => {
        dispatch({
            type: "MANAGE_PROFILE",
            payload: profile
        })
    }
}

export const addExperience = (form) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EXPERIENCE",
            payload: form
        })
    }
}
export const editExperience = (form) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_EXPERIENCE",
            payload: form
        })
    }
}

export const removeExperience = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EXPERIENCE",
            payload: index
        })
    }
}

export const addEducation = (form) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_EDUCATION",
            payload: form
        })
    }
}
export const editEducation = (form) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_EDUCATION",
            payload: form
        })
    }
}

export const removeEducation = (index) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_EDUCATION",
            payload: index
        })
    }
}
export const  addProject= (project) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: project
        })
    }
}
export const  addLanguage= (lang) => {
    return (dispatch) => {
        dispatch({
            type: "addL",
            payload: lang
        })
    }
}
export const  removeLanguage= (lang) => {
    return (dispatch) => {
        dispatch({
            type: "removeL",
            payload: lang
        })
    }
}

