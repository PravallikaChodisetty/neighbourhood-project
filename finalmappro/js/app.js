function mapError() {
    alert("Application cannot be load");
};

function init() {
    'use strict';

    document.querySelector('.loading').classList.add('hide');

    var settings = {
        iconMapDefault: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=.75|0|FFFFFF|20|_|%E2%80%A2',
        iconMapActive: 'http://chart.googleapis.com/chart?chst=d_map_spin&chld=.75|0|20b2aa|20|_|%E2%80%A2',
        styles: [{elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
],
        placesinfo: [{
            name: 'Taj Mahal',
            lat: 27.175015,
            lng: 78.042155,
            imgSrc:"http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.'
        }, {
            name: 'Hawa Mahal',
            lat: 26.923936,
            lng: 75.826744,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'Hawa Mahal is a palace in Jaipur, India. It is constructed of red and pink sandstone. The palace sits on the edge of the City Palace, Jaipur, and extends to the zenana, or womens chambers.'
        }, {
            name: 'Qutub Minar',
            lat: 28.512939,
            lng: 77.186402,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'The Qutub Minar, also spelled as Qutab Minar, or Qutb Minar, is the tallest minaret in the world made up of bricks. The minaret forms a part of the Qutab complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India.'
        }, {
            name: 'Ajanta Ellora Caves',
            lat: 20.55186,
            lng: 75.703252,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'The Ajanta Caves are 29 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE in Aurangabad district of Maharashtra state of India.'
        }, {
            name: 'Charminar',
            lat: 17.361564,
            lng: 78.474665,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'The Charminar, constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become a global icon of Hyderabad, listed among the most recognized structures of India.'
        }, {
            name: 'RedFort',
            lat: 28.656159,
            lng: 77.24102,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'Red Fort is a historic fort in the city of Delhi in India. It was the main residence of the emperors of the Mughal dynasty for nearly 200 years, until 1856. It is located in the center of Delhi and houses a number of museums'
        }, {
            name: 'Golden Temple',
            lat: 31.61998,
            lng: 74.876485,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'Sri Harmandir Sahib, also known as Darbar Sahib, informally referred to as the Golden Temple, is a Gurdwara located in the city of Amritsar, Punjab, India. It is one of the most revered spiritual sites of Sikhism.'
        }, {
            name: 'Tirupathi',
            lat: 13.6782,
            lng: 79.3522,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about:'Venkateswara Temple is a landmark Vaishnavite temple situated in the hill town of Tirumala at Tirupati in Chittoor district of Andhra Pradesh, India.'
        }, {
            name: 'Kedaranath',
            lat: 30.735231,
            lng: 79.066895,
            imgSrc: "http://maps.googleapis.com/maps/api/streetview?size=200x125&heading=100&location=",
            about: 'Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the citys winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.'
        }]
    }

    // Constructor for Places
    var Place = function(data) {
        this.name = data.name;
        this.lat = data.lat;
        this.lng = data.lng;
        this.imgSrc = data.imgSrc + data.lat + ',' + data.lng;
        this.about = data.about;
    };

    // flag first marker render/create
    var flagInitialRender = false;

    // Initialize ViewModel Knockout
    var ViewModel = function() {
        var that = this;

        // footer visibility
        this.showing = ko.observable(false);

        // footer foursquare info bind
        this.categorie = ko.observable();
        this.address = ko.observable();
        this.checkin = ko.observable();

        // Set location list observable array from places
        this.placeList = ko.observableArray([]);

        // Get value from search field.
        this.search = ko.observable('');

        // Make place object from each item in location list then push to observable array.
        settings.placesinfo.forEach(function(item) {
            this.placeList.push(new Place(item));
        }, this);

        // Initial current location to be the first one.
        this.currentPlace = ko.observable(this.placeList()[0]);


        // Functions invoked when user clicked an item in the list.
        this.setPlace = function(clickedPlace) {

            // Set current location to which user clicked.
            that.currentPlace(clickedPlace);

            // Find target of the clicked location and store for use in activation of marker.
            var target = that.filteredItems().indexOf(clickedPlace);
            //that.markers[target].setAnimation(google.maps.Animation.BOUNCE);

            // Prepare content for Google Maps infowindow
            that.updateContent(clickedPlace);

            // Activate the selected marker to change icon.
            // function(marker, context, infowindow, target)
            that.activateMarker(that.markers[target], that, that.infowindow, target)();
        };

        // Filter location name with value from search field.
        this.filteredItems = ko.computed(function() {
            var searchTerm = that.search().toLowerCase();
            if (!searchTerm) {
                return that.placeList();
            } else {
                return ko.utils.arrayFilter(that.placeList(), function(item) {
                    // return true if found the typed keyword, false if not found.
                    return item.name.toLowerCase().indexOf(searchTerm) !== -1;
                });
            }
        });

        // Initialize Google Maps
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { // first place of array
                lat: settings.placesinfo[0].lat,
                lng: settings.placesinfo[0].lng
            },
            zoom: 12,
            styles: settings.styles,
            mapTypeControl: false,
            streetViewControl: false
        });

        // Initialize markers
        this.markers = [];

        // Initialize infowindow
        this.infowindow = new google.maps.InfoWindow({
            maxWidth: 320
        });

        // Render all markers with data from the data model.
        this.renderMarkers(that.placeList());

        // Subscribe to changed in search field. If have change, render again with the filtered locations.
        this.filteredItems.subscribe(function() {

            // Hide markers
            that.clearMarkers();

            // Render current filtered marker
            that.renderMarkers(that.filteredItems());
        });

        // Add event listener for map click event (when user click on other areas of the map beside of markers)
        google.maps.event.addListener(that.map, 'click', function(event) {

            // Every click change all markers icon back to defaults.
            that.deactivateAllMarkers();

            // Every click close all indowindows.
            that.infowindow.close();
        });

        // reset marker
        google.maps.event.addListener(that.infowindow, 'closeclick', function() {
            that.deactivateAllMarkers();
        });
    };

    // Method for clear all markers.
    ViewModel.prototype.clearMarkers = function() {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setVisible(false);
        }
    };

    // Method for render all markers.
    ViewModel.prototype.renderMarkers = function(arrayInput) {

        var infowindow = this.infowindow;
        var context = this;
        var placeToShow = arrayInput;
        var bounds = new google.maps.LatLngBounds();
        var boundPlace;

        // Create new marker for each place in array and push to markers array
        for (var i = 0, len = placeToShow.length; i < len; i++) {

            var location = {
                lat: placeToShow[i].lat,
                lng: placeToShow[i].lng
            };

            if (flagInitialRender) {
                this.markers[i].setVisible(true);
                this.markers[i].setAnimation(google.maps.Animation.DROP);

                //center map
                this.map.panTo(this.markers[i].getPosition());
            } else {
                var marker = new google.maps.Marker({
                    position: location,
                    map: this.map,
                    icon: settings.iconMapDefault,
                    animation: google.maps.Animation.DROP
                });

                this.markers.push(marker);

                // fit markers in viewport
                boundPlace = new google.maps.LatLng(location.lat, location.lng);
                bounds.extend(boundPlace);
                this.map.fitBounds(bounds);
                this.map.panToBounds(bounds);

                //render in the map
                this.markers[i].setMap(this.map);

                // add event listener for click event to the newly created marker
                marker.addListener('click', this.activateMarker(marker, context, infowindow, i));
            }

        }

        if (!flagInitialRender) {
            flagInitialRender = true;
        }
    };

    // Set all marker icons back to default icons.
    ViewModel.prototype.deactivateAllMarkers = function() {
        this.showing(false);
        var markers = this.markers;
        for (var i = 0; i < markers.length; i++) {
            markers[i].setIcon(settings.iconMapDefault);
            markers[i].setAnimation(null); // disable animation

        }
    };

    // Method for foursquare API
    ViewModel.prototype.foursquareReq = function(idx) {
        var self = this;
        var ll = {
            lat: this.placeList()[idx].lat,
            lng: this.placeList()[idx].lng
        }

        //AJAX call
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            cache: true,
            url: 'https://api.foursquare.com/v2/venues/search?oauth_token=ZQNNTXL0VPRQTBL55BJ1VJWPR2RVX41D50XY5SWN3M1UBP2Q&v=20180626&ll=' + ll.lat + ',' + ll.lng
        }).done(function(data) {
            var info = data.response.venues[0];

        }).fail(function() {
            alert("Application can't retrieve foursquare data");
        });
    }

    // Set the target marker to change icon and open infowindow
    // Call from user click on the menu list or click on the marker
    ViewModel.prototype.activateMarker = function(marker, context, infowindow, target) {
        return function() {

            // check if have an target. If have an target mean request come from click on the marker event
            if (!isNaN(target)) {
                var place = context.filteredItems()[target];
                context.updateContent(place);
            }
            // closed opened infowindow
            infowindow.close();

            // deactivate all markers
            context.deactivateAllMarkers();

            //set animation
            marker.setAnimation(google.maps.Animation.BOUNCE);

            // Open targeted infowindow and change its icon.
            infowindow.open(context.map, marker);
            marker.setIcon(settings.iconMapActive);

            // Center marker
            context.map.panTo(marker.getPosition());

            // Get foursquare info
            context.foursquareReq(target);
        };
    };

    // Change the content of infowindow
    ViewModel.prototype.updateContent = function(place) {
        var html = '<div class="info-content">' +
            '<h3>' + place.name + '</h3>' +
            '<img src="' + place.imgSrc + '">' +
            '<p>' + place.about + '</p>' + '</div>';

        this.infowindow.setContent(html);
    };


    // Initialize Knockout View Model
    ko.applyBindings(new ViewModel());

};
