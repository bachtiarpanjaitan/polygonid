const coordTransformer = function (coord) {
    let split = ['9','135','136','134','140','137','138','139','128','127','130','126','125','122','123','119','118','117','116','114','115','106','107','108','103','104','101','102','100']
    if(coord == null) return null
    let coords = coord.trim()
        .replaceAll('(((','[[[')
        .replaceAll(')))',']]]')
        .replaceAll('((','[[')
        .replaceAll('))',']]')
        .replaceAll('),(','],[')
        .replaceAll('MULTIPOLYGON','')
        .replaceAll('POLYGON','')
    split.forEach(s => {
        coords = coords.replaceAll(','+s,'~')
        coords = coords.replaceAll(', '+s,'~')
        coords = coords.replaceAll(' ,'+s,'~')
    })
    coords = coords.replaceAll('~','],[')
    coords = coords.replaceAll('],[.','],[0.')
    coords = coords.replaceAll(' ',',')
    return coords   
};

module.exports = { coordTransformer };