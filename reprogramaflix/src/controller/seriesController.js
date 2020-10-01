const series = require('../models/series.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
};

const getById = (req, res) => {
    const id = req.params.id;
    res.send(series.find(series => series.id == id));
};

const getBySeasons = (req, res) => {
    const seasons = req.params.seasons;
    res.send(series.find(series => series.totalSeasons == seasons));
};

const getByTitle = (req, res) => {
    const title = req.query.title;
    res.send(series.find(series => series.title == title));
};

module.exports = {
    getAll,
    getById,
    getBySeasons,
    getByTitle
};