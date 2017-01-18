var App = App || {};
App.config = App.config || {};

(function() {

    'use strict';

    App.config.sampleGraphs = {

        // credit goes to `http://www.continuitycentral.com/`
        emergencyProcedure: '{"cells":[{"type":"basic.Circle","size":{"width":80,"height":80},"position":{"x":480,"y":10},"angle":0,"id":"d2758428-c41b-469a-9f9c-8eed6bbb8014","z":1,"attrs":{"circle":{"fill":"transparent","stroke":"#b75d32","width":50,"height":30,"stroke-width":8,"stroke-dasharray":"10,5"},"text":{"font-size":15,"text":"Fire\\nIncident","fill":"#b75d32","font-family":"Roboto Condensed","font-weight":"Bold","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"erd.Relationship","size":{"width":170,"height":120},"position":{"x":435,"y":154},"angle":0,"id":"8eea851d-f939-4b70-bd5c-dc8c6a7037cd","z":2,"attrs":{".outer":{"fill":"#4b4a67","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"Auto Alarm\\nactivated?","font-family":"Roboto Condensed","font-size":13,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":690,"y":189},"size":{"width":110,"height":50},"angle":0,"id":"c89958a4-a6b6-41b0-88d2-a2ab3b5ce4ca","z":4,"attrs":{"rect":{"fill":"#feb663","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Activate\\nevacuation","font-size":13,"font-family":"Roboto Condensed","font-weight":"Bold","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":860,"y":595},"size":{"width":110,"height":70},"angle":0,"id":"c7459d76-693a-4db3-a82c-2c45d9822c17","z":6,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Evacuees report\\nto Gathering\\nPoint / Safe Area","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":860,"y":965},"size":{"width":110,"height":70},"angle":0,"id":"89c096ef-433e-4708-a0d9-302ca9807dc4","z":9,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Floor Marshals\\nbrief Crisis\\nManagement\\nTeam using floor\\nplans","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":860,"y":845},"size":{"width":110,"height":70},"angle":0,"id":"8c2a301a-7be7-4e81-b0f1-a53eafac91ec","z":10,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Roll call taken by\\nteam leads","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"erd.Relationship","size":{"width":170,"height":120},"position":{"x":435,"y":370},"angle":0,"id":"1f406e22-d919-4517-b20c-e523e685da93","z":14,"attrs":{".outer":{"fill":"#4b4a67","stroke":"transparent","stroke-dasharray":"0"},"text":{"text":"Alarm monitoring\\nservice provider\\ncontacts organization","font-family":"Roboto Condensed","font-size":13,"font-weight":"Normal","fill":"#f6f6f6","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Circle","size":{"width":30,"height":30},"position":{"x":505,"y":310},"angle":0,"id":"c1caf27f-6361-4698-b9c1-de94e252dff6","z":17,"attrs":{"circle":{"fill":"#b75d32","stroke":"#b75d32","width":50,"height":30,"stroke-width":2,"stroke-dasharray":"0"},"text":{"font-size":13,"text":"Yes","fill":"#f6f6f6","font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Circle","size":{"width":30,"height":30},"position":{"x":365,"y":199},"angle":0,"id":"99017fc6-d525-483f-9fca-8839dd0f34f4","z":20,"attrs":{"circle":{"fill":"#b75d32","stroke":"#b75d32","width":50,"height":30,"stroke-width":2,"stroke-dasharray":"0"},"text":{"font-size":13,"text":"No","fill":"#f6f6f6","font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":25,"y":189},"size":{"width":110,"height":50},"angle":0,"id":"7cfcc948-7114-448f-aed0-1a015c469f12","z":22,"attrs":{"rect":{"fill":"#feb663","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Activate\\nevacuation","font-size":13,"font-family":"Roboto Condensed","font-weight":"Bold","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":205,"y":189},"size":{"width":110,"height":50},"angle":0,"id":"7e08026e-88f8-4f8c-9df5-fd247ab14c79","z":23,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Employees\\nmanually\\nactivates alarm","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":205,"y":310},"size":{"width":110,"height":70},"angle":0,"id":"bc8f7faf-68c9-4667-a42b-0fbaefd12d54","z":27,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Employee\\ninforms\\nprimary\\ncontact","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":465,"y":595},"size":{"width":110,"height":70},"angle":0,"id":"e25b148d-7827-4853-8afd-cfa7e09ed840","z":29,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Primary\\ncontact\\nconfirms fire\\nincident","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Circle","size":{"width":30,"height":30},"position":{"x":505,"y":532},"angle":0,"id":"53af6adf-94a1-4777-94ea-87aa842fe7a4","z":32,"attrs":{"circle":{"fill":"#b75d32","stroke":"#b75d32","width":50,"height":30,"stroke-width":2,"stroke-dasharray":"0"},"text":{"font-size":13,"text":"Yes","fill":"#f6f6f6","font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Circle","size":{"width":30,"height":30},"position":{"x":705,"y":532},"angle":0,"id":"62d5bae6-8d62-4a25-938d-795ce4559ba0","z":35,"attrs":{"circle":{"fill":"#b75d32","stroke":"#b75d32","width":50,"height":30,"stroke-width":2,"stroke-dasharray":"0"},"text":{"font-size":13,"text":"No","fill":"#f6f6f6","font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":665,"y":595},"size":{"width":110,"height":70},"angle":0,"id":"ac57443e-e369-45ff-87f2-1e7a6b5d62fd","z":40,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Primary\\ncontact\\ncontacts Fire\\nDepartment","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":665,"y":725},"size":{"width":110,"height":70},"angle":0,"id":"77952879-a0ce-4c25-920b-b046e2dd359e","z":42,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Primary contact\\ninforms\\nEmergency\\nResponse Team","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":665,"y":845},"size":{"width":110,"height":70},"angle":0,"id":"94c53e9c-da12-4825-b63b-7bfe8de45016","z":44,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Emergency\\nResponse\\nTeam informs\\nCrisis\\nManagement\\nTeam","font-size":11,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":465,"y":725},"size":{"width":110,"height":70},"angle":0,"id":"0ba5b457-b31a-477d-928d-c05c290e4b7b","z":46,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Service\\nProvider\\ncontacts Fire\\nDepartment","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":465,"y":845},"size":{"width":110,"height":70},"angle":0,"id":"d4088e1a-efc0-4c0e-8f33-30cf3b075702","z":47,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Fire Engines\\narrives","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":465,"y":965},"size":{"width":110,"height":70},"angle":0,"id":"5da114a6-3fa7-4192-a9ee-336792006058","z":50,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Crisis\\nManagement\\nTeam Leader\\nbriefs\\nBattalion Chief","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":245,"y":965},"size":{"width":110,"height":70},"angle":0,"id":"b8e0f2e3-9567-4d6b-8536-6bdf8fbd3d4a","z":51,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Fire Department\\nbecomes Incident\\nCommander","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":245,"y":845},"size":{"width":110,"height":70},"angle":0,"id":"654d8c6b-fd3a-42cc-ba3b-3bef44ad455c","z":52,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Fire Department\\ngives All-Clear\\nsignal","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"basic.Rect","position":{"x":245,"y":725},"size":{"width":110,"height":70},"angle":0,"id":"ad54ad2c-8f1a-4b4a-9906-0389f94966d7","z":53,"attrs":{"rect":{"fill":"#dcd7d7","stroke":"#3c4260","width":50,"height":30,"rx":2,"ry":2,"stroke-width":3,"stroke-dasharray":"0"},"text":{"fill":"#3c4260","text":"Crisis\\nManagement\\nTeam directs\\nfuture actions","font-size":13,"font-family":"Roboto Condensed","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"source":{"id":"c89958a4-a6b6-41b0-88d2-a2ab3b5ce4ca"},"target":{"id":"c7459d76-693a-4db3-a82c-2c45d9822c17"},"id":"87775d0e-6b41-4a31-a387-6967038f38bf","z":59,"vertices":[],"labels":[],"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"8eea851d-f939-4b70-bd5c-dc8c6a7037cd"},"target":{"id":"c89958a4-a6b6-41b0-88d2-a2ab3b5ce4ca"},"id":"c408eb1b-1f51-4e41-9158-c21f2b5d59bd","z":60,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"8eea851d-f939-4b70-bd5c-dc8c6a7037cd"},"target":{"id":"99017fc6-d525-483f-9fca-8839dd0f34f4"},"id":"1964a597-0d16-4081-a71a-73ce111e84dd","z":61,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"99017fc6-d525-483f-9fca-8839dd0f34f4"},"target":{"id":"7e08026e-88f8-4f8c-9df5-fd247ab14c79"},"id":"ead354c0-8d9b-4c50-b964-c3d74dabf2c1","z":62,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"7e08026e-88f8-4f8c-9df5-fd247ab14c79"},"target":{"id":"bc8f7faf-68c9-4667-a42b-0fbaefd12d54"},"id":"e790bd55-a5d0-4bc5-9bb6-b68a505f6a43","z":63,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"7e08026e-88f8-4f8c-9df5-fd247ab14c79"},"target":{"id":"7cfcc948-7114-448f-aed0-1a015c469f12"},"id":"7afc8dd2-0246-40d5-8f9d-5a15672a7ef3","z":64,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"e25b148d-7827-4853-8afd-cfa7e09ed840"},"target":{"id":"0ba5b457-b31a-477d-928d-c05c290e4b7b"},"id":"e8da1948-b4e4-4af5-a742-0d0baddc2ed6","z":66,"labels":[],"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"0ba5b457-b31a-477d-928d-c05c290e4b7b"},"target":{"id":"d4088e1a-efc0-4c0e-8f33-30cf3b075702"},"id":"46280a7c-f08a-4218-8adc-49e5e6c2c0ec","z":67,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"d4088e1a-efc0-4c0e-8f33-30cf3b075702"},"target":{"id":"5da114a6-3fa7-4192-a9ee-336792006058"},"id":"632e1b6e-1724-4d55-a3bd-9cd58257a012","z":68,"attrs":{}},{"type":"app.Link","router":{"name":"orthogonal"},"connector":{"name":"normal"},"source":{"id":"1f406e22-d919-4517-b20c-e523e685da93"},"target":{"id":"62d5bae6-8d62-4a25-938d-795ce4559ba0"},"id":"0e97cf0c-5a72-44bd-a791-ba625c99ca65","z":69,"labels":[],"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"62d5bae6-8d62-4a25-938d-795ce4559ba0"},"target":{"id":"ac57443e-e369-45ff-87f2-1e7a6b5d62fd"},"id":"c55ba01a-444e-4ef1-86e2-cc763405706a","z":70,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"ac57443e-e369-45ff-87f2-1e7a6b5d62fd"},"target":{"id":"77952879-a0ce-4c25-920b-b046e2dd359e"},"id":"ea3ae791-16e2-4ad3-b514-d8dec4b572ae","z":71,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"77952879-a0ce-4c25-920b-b046e2dd359e"},"target":{"id":"94c53e9c-da12-4825-b63b-7bfe8de45016"},"id":"739855c5-034e-4354-b772-c109a75a2d4a","z":72,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"c7459d76-693a-4db3-a82c-2c45d9822c17"},"target":{"id":"8c2a301a-7be7-4e81-b0f1-a53eafac91ec"},"id":"e4ac5712-443a-4a5d-aa3a-bdde2fd61ee0","z":73,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"8c2a301a-7be7-4e81-b0f1-a53eafac91ec"},"target":{"id":"89c096ef-433e-4708-a0d9-302ca9807dc4"},"id":"89e3a5c3-3e4c-440c-b665-bf553075441f","z":74,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"89c096ef-433e-4708-a0d9-302ca9807dc4"},"target":{"id":"5da114a6-3fa7-4192-a9ee-336792006058"},"id":"28764c1e-1f44-4244-acd7-fab93c866184","z":75,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"5da114a6-3fa7-4192-a9ee-336792006058"},"target":{"id":"b8e0f2e3-9567-4d6b-8536-6bdf8fbd3d4a"},"id":"674c3400-7523-4754-a1eb-0baaeeeaa238","z":76,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"b8e0f2e3-9567-4d6b-8536-6bdf8fbd3d4a"},"target":{"id":"654d8c6b-fd3a-42cc-ba3b-3bef44ad455c"},"id":"0d315fb8-2027-4a95-9a7f-17490d310f6c","z":77,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"654d8c6b-fd3a-42cc-ba3b-3bef44ad455c"},"target":{"id":"ad54ad2c-8f1a-4b4a-9906-0389f94966d7"},"id":"c2fa0965-faae-4240-b1f9-e9742b736802","z":78,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"bc8f7faf-68c9-4667-a42b-0fbaefd12d54"},"target":{"id":"1f406e22-d919-4517-b20c-e523e685da93"},"id":"4fc0fe4a-e360-4958-a57f-988c5adc9dbf","z":79,"labels":[],"vertices":[{"x":260,"y":430}],"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"8eea851d-f939-4b70-bd5c-dc8c6a7037cd"},"target":{"id":"c1caf27f-6361-4698-b9c1-de94e252dff6"},"id":"03c97bde-165d-42d2-8ef4-8eb1760ee658","z":80,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"c1caf27f-6361-4698-b9c1-de94e252dff6"},"target":{"id":"1f406e22-d919-4517-b20c-e523e685da93"},"id":"d15a3437-4d7b-4275-be22-213a76c023b3","z":81,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"d2758428-c41b-469a-9f9c-8eed6bbb8014"},"target":{"id":"8eea851d-f939-4b70-bd5c-dc8c6a7037cd"},"id":"59b5221e-f031-40c1-9b9a-70359c6e6808","z":82,"attrs":{}},{"type":"basic.Rect","position":{"x":25,"y":30},"size":{"width":220,"height":40},"angle":0,"id":"2877051e-7807-42b6-b404-80daeecb662e","z":85,"attrs":{"rect":{"fill":"transparent","stroke":"transparent","width":50,"height":30,"rx":2,"ry":2,"stroke-width":2,"stroke-dasharray":"0"},"text":{"fill":"#6a6c8a","text":"Emergency Procedure","font-size":26,"font-family":"Alegreya Sans","font-weight":"Normal","stroke-width":0},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"1f406e22-d919-4517-b20c-e523e685da93"},"target":{"id":"53af6adf-94a1-4777-94ea-87aa842fe7a4"},"id":"6711a153-a27b-4e36-9097-d05ff732d83e","z":86,"attrs":{}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"53af6adf-94a1-4777-94ea-87aa842fe7a4"},"target":{"id":"e25b148d-7827-4853-8afd-cfa7e09ed840"},"id":"8b73a952-12ae-46ca-9a76-3fec80695a9f","z":87,"attrs":{}}]}'
    };

})();
