const dbBuild = require('../server/database/config/builds');
const connection = require('../server/database/config/connection');
const { addPostDB } = require('../server/database/queries');
const getPostsDB = require('../server/database/queries/post/getPostDB');

beforeEach(() => dbBuild());

describe('Test Database', () => {
  test('test get all post using getPostsDB', () => {
    getPostsDB().then((data) => {
      expect(data.rowCount).toBe(0);
    });
  });

  test('test add post', () => {
    const data = {
      title: 'test',
      description: 'test test',
      user_id: 1,
    };
    addPostDB(data).then((res) => {
      expect(res.rowCount).toBe(1);
    });
  });
});

afterAll(() => connection.end());
