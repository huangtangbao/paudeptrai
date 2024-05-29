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
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrud: getCrud,
    postCRUD: postCRUD
}