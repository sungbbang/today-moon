const express = require('express');
const axios = require('axios');
const router = express.Router();

const requestHeader = {
  Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`,
};

router.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    // 1. 키워드 검색
    let response = await axios.get(
      'https://dapi.kakao.com/v2/local/search/keyword.json',
      {
        params: { query },
        headers: requestHeader,
      }
    );

    // 2. 키워드 검색결과가 없으면 주소 검색
    if (response.data.documents.length === 0) {
      response = await axios.get(
        'https://dapi.kakao.com/v2/local/search/address.json',
        {
          params: { query },
          headers: requestHeader,
        }
      );
    }

    const result = response.data.documents.map(v => ({
      address_name: v.address_name,
      road_address_name: v.road_address_name,
      place_name: v.place_name,
      x: v.x,
      y: v.y,
    }));

    res.json(result);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
});

router.get('/coord2address', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await axios.get(
      'https://dapi.kakao.com/v2/local/geo/coord2address.json',
      {
        params: { x: lon, y: lat },
        headers: requestHeader,
      }
    );

    const doc = response.data.documents?.[0];

    const result = {
      region_1depth_name: doc.address.region_1depth_name || '',
      region_2depth_name: doc.address.region_2depth_name || '',
      region_3depth_name: doc.address.region_3depth_name || '',
    };

    res.json(result);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
});

module.exports = router;
