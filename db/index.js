'use strict'

const { Pool } = require('pg')
const debug = require('debug')('db')

const isUnitTesting = process.env.NODE_ENV === 'unit_testing'

// Database connection config. A "pool" should generally be used instead of a
// single client since multiple concurrent queries are possible.
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: isUnitTesting ?
    'postgres_example_unit_testing' : 'postgres_example_development',
  port: 5432,
})

pool.on('error', err => {
  console.error('An idle client has experienced an error', err)
})

// Helper for running any queries against the db. Inserts, deletes, whatever.
const query = async (text, params) => {
  const start = Date.now()

  // Run the gd query.
  const res = await pool.query(text, params)

  const duration = Date.now() - start
  debug('executed query', { text, duration, rows: res.rowCount })

  return res
}

// Helper to close the pool when needed. Normally this should only be run when
// the application ends entirely.
const closeConnections = async () => {
  await pool.end()
}

module.exports = {
  query,
  closeConnections,
}
