# Demonstrate use or requests to implement REST API calls
# REST - Representational State Transfer
# API - Application Program Interface

# Original Author: Kristopher Roberts
# Most recent editor: Wyatt Pearce
# Date: 12-4-2024

import requests
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap

# API parameters
api_url = 'https://nominatim.openstreetmap.org/reverse'
latitude = 40.748817
longitude = -73.985428
params = {'lat': latitude, 'lon': longitude, 'format': 'json'}
headers = {'User-Agent': 'my-app-name'}

# Make the API call
response = requests.get(api_url, headers=headers, params=params)

# Adjusted by Wyatt for "Prettier output"
if response.status_code == 200:
    data = response.json()
    if 'address' in data:
        address = data['address']

        # Construct a full address
        full_address = f"{address.get('house_number', '')} {address.get('road', '')}, {address.get('suburb', '')}, {address.get('city', '')}, {address.get('state', '')}, {address.get('country', '')}".strip(", ")
        print(f"Full Address: {full_address}")
        
        # Print individual fields (only for important details)
        print("\nDetails:")
        print(f"Shop: {address.get('shop', 'N/A')}")
        print(f"Neighbourhood: {address.get('neighbourhood', 'N/A')}")
        print(f"Postcode: {address.get('postcode', 'N/A')}")
    else:
        print("Address not found in the response!")
else:
    print(f"Error: HTTP {response.status_code}")

# Plot the location on a map
plt.figure(figsize=(16, 8))
m = Basemap(llcrnrlon=-180, llcrnrlat=-65, urcrnrlon=180, urcrnrlat=80)

m.drawmapboundary(fill_color="aqua", linewidth=0)
m.fillcontinents(color='grey', alpha=0.3)
m.drawcoastlines(linewidth=0.1, color='white')
m.scatter(longitude, latitude, s=200, alpha=0.4, color='black')

plt.title("Location")
plt.show()

input("Press any key to continue!!!")
print("Have a nice day!!!")