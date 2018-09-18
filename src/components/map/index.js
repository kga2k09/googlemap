import React, { Component } from 'react';
import './index.css'
class Map extends Component{

    constructor() {
        super();
        this.state = {
          zoom: 13,
          maptype: 'roadmap',
          place_formatted: '',
          place_id: '',
          place_location: ''
        };
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
    
    
      showPosition = (position) => {
        console.log('entered',position.coords.latitude);
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: Number(position.coords.latitude), lng: Number(position.coords.longitude )},
          zoom: 13,
          mapTypeId: 'roadmap',
        });
    
        map.addListener('zoom_changed', () => {
          this.setState({
            zoom: map.getZoom(),
          });
        });
    
        map.addListener('maptypeid_changed', () => {
          this.setState({
            maptype: map.getMapTypeId(),
          });
        });
    
    
    
    
        let marker = new window.google.maps.Marker({
          map: map,
          position: { lat: Number(this.state.latitude), lng: Number(this.state.longitude) },
        });
    
        // initialize the autocomplete functionality using the #pac-input input box
        let inputNode = document.getElementById('pac-input');
        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
        let autoComplete = new window.google.maps.places.Autocomplete(inputNode);
    
        autoComplete.addListener('place_changed', () => {
          let place = autoComplete.getPlace();
          let location = place.geometry.location;
    
          this.setState({
            place_formatted: place.formatted_address,
            place_id: place.place_id,
            place_location: location.toString(),
          });
    
          // bring the selected place in view on the map
          map.fitBounds(place.geometry.viewport);
          map.setCenter(location);
    
          marker.setPlace({
            placeId: place.place_id,
            location: location,
          });
        });
    
      }
    
    render(){
        return(
            <div id="map"></div>
        );
    }
}
export default Map;