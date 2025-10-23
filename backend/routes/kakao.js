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
    console.error(error.response?.data || error.status);
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

    const data = response.data;

    if (data.meta.total_count === 0) {
      return res.json({ status: '', result: [] });
    }

    // const doc = response.data.documents?.[0];

    // const result = {
    //   region_1depth_name: doc.address.region_1depth_name || '',
    //   region_2depth_name: doc.address.region_2depth_name || '',
    //   region_3depth_name: doc.address.region_3depth_name || '',
    // };

    res.json(response.data.documents[0]);
  } catch (error) {
    console.error(error.response?.data || error.status);
    res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
});

router.get('/coord2regioncode', async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await axios.get(
      'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json',
      {
        params: { x: lon, y: lat },
        headers: requestHeader,
      }
    );

    const data = response.data;

    if (data.meta.total_count === 0) {
      return res.json({ status: 'success', result: null });
    }

    // 법정동을 기준으로 응답
    let regionData = data.documents.find(doc => doc.region_type === 'B');
    // 법정동 데이터가 없고 행정동 데이터만 있는 경우
    if (!regionData) {
      regionData = data.documents.find(doc => doc.region_type === 'H');
    }

    res.json({ status: 'success', result: regionData });
  } catch (error) {
    console.error(error.response.data || error.status);
    res
      .status(500)
      .json({ status: 'error', message: '서버 오류가 발생했습니다.' });
  }
});

module.exports = router;
