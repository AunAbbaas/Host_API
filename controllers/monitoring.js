const express = require("express");
const os = require("os");
const process = require("process");
const IP = require("ip");

const app = express();
app.use(express.json());

const ipAddress = IP.address();

const monitoring = (req, res) => {
  const serverDetails = [
    {
      Host: req.get("host"),
      url: req.url,
      requestType: req.method,
      protocols: req.protocol,
      hostname: os.hostname(),
      platform: os.platform(),
      uptime: os.uptime(),
      loadavg: os.loadavg(),
      release: os.release(),
      arch: os.arch(),
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      cpuUsage: process.cpuUsage(),
      memoryUsage: process.memoryUsage(),
      IpAddress: ipAddress,
    },
  ];
  res.json(serverDetails);
};

module.exports = { monitoring };
