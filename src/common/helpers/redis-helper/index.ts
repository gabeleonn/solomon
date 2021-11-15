import redis from 'redis';
import { promisifyAll } from 'bluebird';

promisifyAll(redis);

export const RedisHelper = {
  uri: null as string,
  client: null,
  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = redis.createClient();
  },

  async disconnect(): Promise<void> {
    await this.client.quit();
    this.client = null;
  },
  async get(key: string): Promise<any> {
    const gotten = await this.client.getAsync(key);
    return JSON.parse(gotten);
  },
  async set(key: string, value: any): Promise<void> {
    await this.client.setAsync(key, JSON.stringify(value));
  },
};
