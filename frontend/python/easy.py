# import requests
# import json

# def fetch_instagram_data(user_id, query_hash, first=50, end_cursor=None):
#     # Set the endpoint
#     url = "https://instagram.com/graphql/query/"
    
#     # Prepare variables for the request
#     variables = {
#         "id": user_id,
#         "first": first,
#     }
    
#     if end_cursor:
#         variables["after"] = end_cursor  # For pagination

#     # Prepare the query parameters
#     params = {
#         "query_hash": query_hash,
#         "variables": json.dumps(variables)
#     }
    
#     # Send the GET request
#     response = requests.get(url, params=params)
    
#     if response.status_code == 200:
#         return response.json()  # Return the parsed JSON response
#     else:
#         print(f"Error fetching data: {response.status_code}")
#         return None

# # Example usage
# if __name__ == "__main__":
#     user_id = "210412485"  # Replace with actual user ID
#     followings_query_hash = "58712303d941c6855d4e888c5f0cd22f"
#     followers_query_hash = "37479f2b8209594dde7facb0d904896a"

#     # Fetch followings
#     followings_data = fetch_instagram_data(user_id, followings_query_hash)
#     print(json.dumps(followings_data, indent=2))

#     # Fetch followers
#     followers_data = fetch_instagram_data(user_id, followers_query_hash)
#     print(json.dumps(followers_data, indent=2))
import requests

# Start a session
session = requests.Session()

# Log in to Instagram
# Replace 'your_username' and 'your_password' with your actual credentials
login_url = 'https://www.instagram.com/accounts/login/ajax/'
username = 'webmind1s'
password = 'asdf2qwrASDF234@@#$@$@!$'

# Set headers for login
login_headers = {
    'User-Agent': 'Instagram 146.0.0.27.125 (iPhone12,1; iOS 13_3; en_US; en-US;scale=2.00; 1656x3584; 190542906',   
    'X-CSRFToken': 'missing'  # CSRF token will be fetched after the first request
}

# Perform the login request to fetch the CSRF token
session.get(login_url, headers=login_headers)

# Prepare the payload for login
login_payload = {
    'username': username,
    'password': password
}

# Perform login
response = session.post(login_url, data=login_payload, headers=login_headers)

# Check if login was successful
if response.status_code == 200 and response.json().get('authenticated'):
    print("Login successful!")
else:
    print("Login failed. Check your credentials.")
    exit()

# Now construct the query for similar users
query_hash = "7c16654f22c819fb63d1183034a5162f"
user_id = "811172706"
first = 10   

# Construct the URL
url = f"https://www.instagram.com/graphql/query/?query_hash={query_hash}&variables={{\"user_id\":\"{user_id}\",\"first\":{first}}}"

# Make the GET request using the session
response = session.get(u/.,  nib 34ynj rl)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()  # Parse the response JSON
    print(data)  # Print the data
else:
    print(f"Error: {response.status_code} - {response.text}")  # Print error if any
