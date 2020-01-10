'use strict'

const assert = require('assert')

const db = require('../../db/')

describe('db', () => {
  after(async () => {
    await db.query('delete from users') 
  })
  after(async () => await db.closeConnections())

  it('should be able to query from the database', async () => {
    const username = 'carter'
    const email = 'carter@testing.com'
    const insert = `
      insert into users (username, email)
      values('${username}', '${email}')
    `

    await db.query(insert)

    const { rows } = await db.query('select * from users')
    assert.equal(rows.length, 1)

    const data = rows[0]
    assert.equal(data.username, username)
    assert.equal(data.email, email)
  })
})
