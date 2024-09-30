document.getElementById('generate').addEventListener('click', function() {
    const city = document.getElementById('city').value.toLowerCase();
    const days = parseInt(document.getElementById('days').value);
    const itineraryDiv = document.getElementById('itinerary');
    itineraryDiv.innerHTML = ''; // Clear previous itinerary

    if (!city || isNaN(days) || days <= 0) {
        alert('Please enter valid inputs.');
        return;
    }

    let itinerary;

    switch (city) {
        case 'mumbai':
            itinerary = generateItineraryMumbai(days);
            break;
        case 'delhi':
            itinerary = generateItineraryDelhi(days);
            break;
        case 'bengaluru':
            itinerary = generateItineraryBengaluru(days);
            break;
        case 'kolkata':
            itinerary = generateItineraryKolkata(days);
            break;
        case 'chennai':
            itinerary = generateItineraryChennai(days);
            break;
        case 'hyderabad':
            itinerary = generateItineraryHyderabad(days);
            break;
        case 'ahmedabad':
            itinerary = generateItineraryAhmedabad(days);
            break;
        case 'pune':
            itinerary = generateItineraryPune(days);
            break;
        case 'jaipur':
            itinerary = generateItineraryJaipur(days);
            break;
        case 'surat':
            itinerary = generateItinerarySurat(days);
            break;
        case 'lucknow':
            itinerary = generateItineraryLucknow(days);
            break;
        case 'kanpur':
            itinerary = generateItineraryKanpur(days);
            break;
        case 'nagpur':
            itinerary = generateItineraryNagpur(days);
            break;
        case 'visakhapatnam':
            itinerary = generateItineraryVisakhapatnam(days);
            break;
        case 'chandigarh':
            itinerary = generateItineraryChandigarh(days);
            break;
        case 'coimbatore':
            itinerary = generateItineraryCoimbatore(days);
            break;
        default:
            itineraryDiv.innerHTML = 'City not found. Please try another city.';
            return;
    }

    itineraryDiv.innerHTML = itinerary;
});

function generateItineraryMumbai(days) {
    const activities = [
        { day: 1, site: "Gateway of India", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Colaba Causeway", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Marine Drive", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Chhatrapati Shivaji Maharaj Terminus", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Elephanta Caves", cost: 200, time: "10:00 AM" },
        { day: 3, site: "Juhu Beach", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Marine Plaza", price: 4500 },
        { name: "Hotel Sea Princess", price: 4000 },
        { name: "The Taj Mahal Palace", price: 5000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Mumbai");
}

function generateItineraryDelhi(days) {
    const activities = [
        { day: 1, site: "India Gate", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Qutub Minar", cost: 30, time: "1:00 PM" },
        { day: 2, site: "Red Fort", cost: 50, time: "9:00 AM" },
        { day: 2, site: "Humayun's Tomb", cost: 30, time: "3:00 PM" },
        { day: 3, site: "Lotus Temple", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Akshardham Temple", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Palace Heights", price: 4000 },
        { name: "Taj Palace", price: 5000 },
        { name: "The Park", price: 3000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Delhi");
}

function generateItineraryBengaluru(days) {
    const activities = [
        { day: 1, site: "Bangalore Palace", cost: 250, time: "10:00 AM" },
        { day: 1, site: "Cubbon Park", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Lalbagh Botanical Garden", cost: 50, time: "9:00 AM" },
        { day: 2, site: "Vidhana Soudha", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Bannerghatta National Park", cost: 400, time: "10:00 AM" },
        { day: 3, site: "MG Road", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Royal Orchid", price: 4000 },
        { name: "The Chancery Pavilion", price: 5000 },
        { name: "Lemon Tree Hotel", price: 3500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Bengaluru");
}

function generateItineraryKolkata(days) {
    const activities = [
        { day: 1, site: "Victoria Memorial", cost: 20, time: "10:00 AM" },
        { day: 1, site: "Howrah Bridge", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Dakshineswar Kali Temple", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Science City", cost: 100, time: "3:00 PM" },
        { day: 3, site: "Eden Gardens", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Shopping at New Market", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "The Oberoi Grand", price: 5000 },
        { name: "Hotel Park Plaza", price: 4000 },
        { name: "Taj Bengal", price: 4500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Kolkata");
}

function generateItineraryChennai(days) {
    const activities = [
        { day: 1, site: "Marina Beach", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Fort St. George", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Kapaleeshwarar Temple", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Mahabalipuram", cost: 100, time: "3:00 PM" },
        { day: 3, site: "Ekkatuthangal", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Shopping in T Nagar", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "The Leela Palace", price: 5000 },
        { name: "ITC Grand Chola", price: 4000 },
        { name: "Radisson Blu", price: 3500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Chennai");
}

function generateItineraryHyderabad(days) {
    const activities = [
        { day: 1, site: "Charminar", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Hussain Sagar", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Golconda Fort", cost: 50, time: "9:00 AM" },
        { day: 2, site: "Ramoji Film City", cost: 1000, time: "3:00 PM" },
        { day: 3, site: "Shilparamam", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Shopping in Banjara Hills", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Taj Deccan", price: 4500 },
        { name: "ITC Kakatiya", price: 5000 },
        { name: "The Park Hyderabad", price: 4000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Hyderabad");
}

function generateItineraryAhmedabad(days) {
    const activities = [
        { day: 1, site: "Sabarmati Ashram", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Kankaria Lake", cost: 50, time: "1:00 PM" },
        { day: 2, site: "Adalaj Stepwell", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Sardar Patel Museum", cost: 20, time: "3:00 PM" },
        { day: 3, site: "Shopping at Law Garden", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Visit Gandhi Nagar", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Ramada", price: 4500 },
        { name: "Taj Skyline", price: 5000 },
        { name: "The Grand Bhagwati", price: 4000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Ahmedabad");
}

function generateItineraryPune(days) {
    const activities = [
        { day: 1, site: "Shaniwar Wada", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Aga Khan Palace", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Sinhagad Fort", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Osho Ashram", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Shopping at FC Road", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Visit Parvati Hill", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "JW Marriott", price: 5000 },
        { name: "The Westin", price: 4500 },
        { name: "Radisson Blu", price: 4000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Pune");
}

function generateItineraryJaipur(days) {
    const activities = [
        { day: 1, site: "Hawa Mahal", cost: 50, time: "10:00 AM" },
        { day: 1, site: "City Palace", cost: 100, time: "1:00 PM" },
        { day: 2, site: "Amber Fort", cost: 100, time: "9:00 AM" },
        { day: 2, site: "Jaipur Markets", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Jantar Mantar", cost: 50, time: "10:00 AM" },
        { day: 3, site: "Shopping in Bapu Bazaar", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Taj Rambagh Palace", price: 5000 },
        { name: "ITC Rajputana", price: 4000 },
        { name: "The Lalit Jaipur", price: 4500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Jaipur");
}

function generateItinerarySurat(days) {
    const activities = [
        { day: 1, site: "Surat Castle", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Sarthana Nature Park", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Dutch Cemetery", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Shopping at Surat Diamond Market", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Visit Gopi Talav", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Enjoy local cuisine", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Courtyard by Marriott", price: 4500 },
        { name: "The Gateway Hotel", price: 4000 },
        { name: "Hotel Prince", price: 3500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Surat");
}

function generateItineraryLucknow(days) {
    const activities = [
        { day: 1, site: "Bara Imambara", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Chota Imambara", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Rumi Darwaza", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Shopping at Hazratganj", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Visit Ambedkar Park", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Explore local food", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Taj Mahal Lucknow", price: 5000 },
        { name: "Hotel Clarks Avadh", price: 4500 },
        { name: "The Mourya", price: 3500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Lucknow");
}

function generateItineraryKanpur(days) {
    const activities = [
        { day: 1, site: "Jajmau", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Kanpur Zoo", cost: 20, time: "1:00 PM" },
        { day: 2, site: "Maharana Pratap Park", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Phool Bagh", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Shopping in Naveen Market", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Explore local cuisine", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Landmark", price: 4500 },
        { name: "The Mall Road", price: 4000 },
        { name: "Hotel Blue Star", price: 3500 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Kanpur");
}

function generateItineraryNagpur(days) {
    const activities = [
        { day: 1, site: "Futala Lake", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Zero Mile Stone", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Shree Ganesh Mandir", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Ramtek Fort", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Visit Seminary Hill", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Shopping in Sitabuldi", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Centre Point", price: 4500 },
        { name: "Radisson Blu", price: 5000 },
        { name: "Taj Residency", price: 4000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Nagpur");
}

function generateItineraryVisakhapatnam(days) {
    const activities = [
        { day: 1, site: "RK Beach", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Submarine Museum", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Kailasagiri", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Araku Valley", cost: 300, time: "3:00 PM" },
        { day: 3, site: "Visakha Museum", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Shopping at Jagadamba Center", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "The Park", price: 4500 },
        { name: "Taj Gateway", price: 4000 },
        { name: "Novotel", price: 5000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Visakhapatnam");
}

function generateItineraryChandigarh(days) {
    const activities = [
        { day: 1, site: "Rock Garden", cost: 0, time: "10:00 AM" },
        { day: 1, site: "Sukhna Lake", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Rose Garden", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Chandigarh Haat", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Elante Mall", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Shopping at Sector 17", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Taj", price: 5000 },
        { name: "JW Marriott", price: 4500 },
        { name: "Hyatt Regency", price: 4000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Chandigarh");
}

function generateItineraryCoimbatore(days) {
    const activities = [
        { day: 1, site: "Marudamalai Temple", cost: 0, time: "10:00 AM" },
        { day: 1, site: "VOC Park", cost: 0, time: "1:00 PM" },
        { day: 2, site: "Perur Pateeswarar Temple", cost: 0, time: "9:00 AM" },
        { day: 2, site: "Kovai Kutralam Falls", cost: 0, time: "3:00 PM" },
        { day: 3, site: "Shopping in RS Puram", cost: 0, time: "10:00 AM" },
        { day: 3, site: "Visit Dhyanalinga", cost: 0, time: "4:00 PM" }
    ];

    const hotels = [
        { name: "Hotel Le Meridien", price: 5000 },
        { name: "Vivanta Coimbatore", price: 4500 },
        { name: "The Residency", price: 4000 }
    ];

    return generateItineraryOutput(days, activities, hotels, "Coimbatore");
}

function generateItineraryOutput(days, activities, hotels, city) {
    let output = `<h2>Itinerary for ${city} (${days} days)</h2>`;
    
    activities.slice(0, days * 2).forEach(activity => {
        output += `<p>Day ${activity.day}: Visit ${activity.site} at ${activity.time} (Cost: ₹${activity.cost})</p>`;
    });

    output += `<h3>Recommended Hotels (₹3000 - ₹5000)</h3><ul>`;
    hotels.forEach(hotel => {
        output += `<li>${hotel.name} - ₹${hotel.price}</li>`;
    });
    output += `</ul>`;

    return output;
}
