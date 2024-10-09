// src/InstagramUser.js
import React, { useState } from 'react';
import instagram from 'user-instagram';

const InstagramUser = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [authError, setAuthError] = useState('');

    const authenticate = async () => {
        try {
            await instagram.login('webmind1s', 'asdf2qwrASDF234@@#$@$@!$');
            console.log('Authenticated successfully!');
        } catch (error) {
            console.error('Authentication error:', error);
            setAuthError('Failed to authenticate. Check your credentials.');
        }
    };

    const fetchUserData = async () => {
        try {
            const data = await instagram.getUserData(username);
            setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div >
            <h1>Instagram User Data</h1>
            <button onClick={authenticate}>Authenticate</button>
            <input 
                type="text" 
                placeholder="Enter Instagram username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <button onClick={fetchUserData}>Fetch User Data</button>

            {authError && <p style={{color: 'red'}}>{authError}</p>}
            
            {userData && (
                <div>
                    <h2>{userData.getFullName()}</h2>
                    <p>Username: {userData.getUsername()}</p>
                    <p>Followers: {userData.getFollowersCount()}</p>
                    <p>Following: {userData.getFollowingCount()}</p>
                    <p>Biography: {userData.getBiography()}</p>
                </div>
            )}
        </div>
    );
};

export default InstagramUser;
