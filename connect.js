const axios = require('axios');
const cheerio = require('cheerio');
const crypto = require('crypto');
const cfonts = require("cfonts");
const colors = require("colors");
const fs = require('fs-extra');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const isUrl = require('is-url');
const ms = require('ms');
const moment = require('moment-timezone');
const number = require('awesome-phonenumber');
const nodecache = require("node-cache");
const request = require('request');
const readline = require("readline");
const speed = require("performance-now");
const pino = require('pino');
const util = require('util');
const os = require('os');
const { Boom } = require('@hapi/boom');
const { exec, spawn, execSync } = require('child_process');

module.exports = { axios, Boom, cheerio, crypto, cfonts, colors, fs, ffmpeg, fetch, isUrl, ms, moment, number, nodecache, request, readline, speed, pino, util, os, exec, spawn, execSync }