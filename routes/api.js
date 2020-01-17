// Full Documentation - https://docs.turbo360.co
const turbo = require("turbo360")({ site_id: process.env.TURBO_APP_ID });
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();

const controllers = require("../controllers");

router.get("/:resource", async (req, res) => {
  const {
    params: { resource },
    query: filters
  } = req;
  const controller = controllers[resource];
  try {
    const data = await controller.get(filters);
    res.json({
      status: "success",
      data
    });
  } catch (err) {
    res.json({
      status: "fail",
      data: err.message
    });
  }
});

router.get("/:resource/:id", async (req, res) => {
  const { resource, id } = req.params;
  const controller = controllers[resource];
  try {
    const data = await controller.getById(id);
    res.json({
      status: "success",
      data
    });
  } catch (err) {
    res.json({
      status: "fail",
      data: err.message
    });
  }
});

router.post("/:resource", async (req, res) => {
  const {
    params: { resource },
    body
  } = req;
  const controller = controllers[resource];
  try {
    const data = await controller.post(body);
    res.json({
      status: "success",
      data
    });
  } catch (err) {
    res.json({
      status: "fail",
      data: err.message
    });
  }
});

router.put("/:resource/:id", async (req, res) => {
  const {
    params: { resource, id },
    body
  } = req;
  const controller = controllers[resource];
  try {
    const data = await controller.put(id, body);
    res.json({
      status: "success",
      data
    });
  } catch (err) {
    res.json({
      status: "fail",
      data: err.message
    });
  }
});

router.delete("/:resource/:id", async (req, res) => {
  const {
    params: { resource, id }
  } = req;
  const controller = controllers[resource];
  try {
    await controller.delete(id);
    res.json({
      status: "success",
      data: { id }
    });
  } catch (err) {
    res.json({
      status: "fail",
      data: err.message
    });
  }
});

module.exports = router;
