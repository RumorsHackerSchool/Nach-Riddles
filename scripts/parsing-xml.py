from xml.dom import minidom

xmldoc = minidom.parse('rows.xml')
response = xmldoc.getElementsByTagName('response')[0]
row = response.getElementsByTagName('row')[0]
row2 = row.getElementsByTagName('row')

for lop in row2:
    citys = lop.getElementsByTagName('city')[0].firstChild.data
    _2010_population = lop.getElementsByTagName('_2010_population')[0].firstChild.data
    cityName = citys.split(",")[0]
    print citys
    #print 'CityName:',cityName,', Population in 2010: ',_2010_population
