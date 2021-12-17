import React, { useState, useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_ENDPOINT = "/";
const TRENDS = "api/trends?id="
const LOCATION_ID = "1"

const trendsReducer = (state,action)=>{
	switch(action.type){
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();      
	}
};

const List = ({ list }) =>
  list.map((item) => (
    <Item key={item.url} item={item} />
  ));





function MainPage() {
	const [url, setUrl]=useState('${API_ENDPOINT}${TRENDS}${LOCATION_ID}');
	const [location, setLocation]=useState(LOCATION_ID);
	const [trends, dispatchTrends]=useReducer(trendsReducer{
		data: [],
		isLoading: true,
		isError: false
	});
}


