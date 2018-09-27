import Realm from 'realm';
import React from 'react';



class Keywords {}
Keywords.schema = {
    name: 'Keywords',
    primaryKey: 'id',
    properties: {
        title: 'string',
        link: 'string',
    },
};

const realm = new Realm({schema: [Keywords]});


realm.write(() => {
    savedWords = realm.create('Keywords', {
        title: item.title,
        link: item.formattedUrl,
    });
});

