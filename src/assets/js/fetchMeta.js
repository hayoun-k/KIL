import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export async function fetchMeta(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const getMeta = (prop) => $(`meta[property="${prop}"]`).attr('content') || '';

    return {
      title: getMeta('og:title') || $('title').text(),
      description: getMeta('og:description'),
      image: getMeta('og:image'),
      url,
    };
  } catch (err) {
    console.error(`Failed to fetch meta from ${url}:`, err);
    return null;
  }
}
