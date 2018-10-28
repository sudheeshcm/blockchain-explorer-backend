"use strict";

const mockTransactions = require("../__mocks__/transactions");
const mockBlocks = require("../__mocks__/blocks");

const searchByQuery = (req, res, next) => {
  const { text } = req.query;

  if (!text) {
    res.status(422).end({
      transaction: null,
      error: {
        code: "MISSING_PARAMETER",
        message: "Missing text param"
      }
    });
  }

  const transactions = mockTransactions.filter(t => t.hash.startsWith(text));
  const blocks = mockBlocks.filter(b => b.hash.startsWith(text));

  res.send({
    transactions,
    blocks
  });
};

module.exports = searchByQuery;
