# Movizo - Backend API for Movie Management

Movizo is a backend API that allows users to register, log in, and perform various operations related to movie management. Users can create, retrieve, update, and delete movies, as well as filter movies based on specific criteria.

## Table of Contents
- [Registration and Login](#registration-and-login)
- [Get All Movies](#get-all-movies)
- [Create a Movie](#create-a-movie)
- [Get Movies by Name](#get-movies-by-name)
- [Delete a Movie](#delete-a-movie)
- [Update a Movie](#update-a-movie)
- [Filter Movies](#filter-movies)

## Registration and Login

1. **Register User:**
   - Endpoint: [POST] `https://movizo.vercel.app/users/register`
   - Request Body:
     ```json
     {
         "username": "Sanjay",
         "email": "sanjay@gmail.com",
         "password": "sanjay"
     }
     ```
   - Response: New user created

2. **Login:**
   - Endpoint: [POST] `https://movizo.vercel.app/users/login`
   - Request Body:
     ```json
     {
         "email": "sanjay@gmail.com",
         "password": "sanjay"
     }
     ```
   - Response: Token (valid for 15 minutes)

## Get All Movies

3. **Get All Movies:**
   - Endpoint: [GET] `https://movizo.vercel.app/movies`
   - Authorization: Bearer Token (Generated from login)
   - Response: Empty array (No movies created)

## Create a Movie

4. **Create a Movie:**
   - Endpoint: [POST] `https://movizo.vercel.app/movies`
   - Authorization: Bearer Token (Generated from login)
   - Request Body:
     ```json
     {
       "name": "Leo End",
       "director": "Lokesh",
       "year": "2024",
       "language": "Tamil",
       "rating": 8
     }
     ```
   - Response: Movie details stored in MongoDB

## Get Movies by Name

5. **Get Movies by Name:**
   - Endpoint: [GET] `https://movizo.vercel.app/movies/{movieName}`
   - Authorization: Bearer Token
   - Response: Movie details (if exists)

## Delete a Movie

6. **Delete a Movie:**
   - Endpoint: [DELETE] `https://movizo.vercel.app/movies/{movieName}`
   - Authorization: Bearer Token
   - Response: Movie deleted successfully

## Update a Movie

7. **Update a Movie:**
   - Endpoint: [PUT] `https://movizo.vercel.app/movies/{movieName}`
   - Authorization: Bearer Token
   - Request Body:
     ```json
     {
       "name": "Leo End Updated",
       "director": "Lokesh Kanagaraj",
       "year": "2024",
       "language": "Tamil",
       "rating": 10
     }
     ```
   - Response: Movie updated successfully

## Filter Movies

8. **Filter Movies:**
   - Endpoint: [GET] `https://movizo.vercel.app/movies/filter?name={anyMovie}` 
     - (or) `https://movizo.vercel.app/movies/filter?language={anyLang}`
     - (or) `https://movizo.vercel.app/movies/filter?year={anyYear}`
   - Authorization: Bearer Token
   - Response: Filtered movies based on the specified criteria

## Additional Notes
- The token generated during login is valid for 15 minutes.
- Work in progress for additional features.

Still working on movizo to make some cool feature, feel free to contribute

--Sanjay
