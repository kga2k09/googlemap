export function zoomChange(map) {
    return {
      type: 'zoom_changed',
      map
    }
}

export function mapIdChange(map) {
    return {
      type: 'maptypeid_changed',
      map
    }
}

export function placeChange(map) {
    return {
      type: 'place_changed',
      map
    }
}