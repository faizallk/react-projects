import axios from 'axios';

const instance = axios.create({

  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmU5MjMxNTU2ZDkzNDAyYjc0YTc5ODE4ZDIyZDdlZCIsIm5iZiI6MTc1MTgxMzQ1OC40NCwic3ViIjoiNjg2YThkNTIyYzRlZmFjYmMxNTNmOTZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.DwPbru-Rx5Qdev4EzALFmH9yMipKSdKq66BgzWbnUmM'
  }
});

export default instance
