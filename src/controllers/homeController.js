import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('-----------------');
        console.log(data);
        console.log('-----------------');
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }


}
let getAboutPage = (req, res) => {
    return res.render("test/about.ejs");
}
let getCrud = (req, res) => {
    return res.render("crud.ejs");
}
let postCRUD = async (req, res) => {
    let mess = await CRUDService.createNewUser(req.body);
    console.log(mess);
    return res.send("post crud from server");
}
let getCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('-----------------');
    console.log(data);
    console.log('-----------------');
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //check user if found
        return res.render('editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send('user not found');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    console.log("-----------");
    console.log(data);
    console.log("-----------");
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('editCRUD.ejs', {
        user: allUsers
    });
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrud: getCrud,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD
}