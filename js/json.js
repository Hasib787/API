const user={
    id:787,
    name: "Hasib",
    Address: {
        home: "Ujirpur",
        town: "Barisal"
    },
    friendsAg: [12,15,16],
    friends:['Ayman','Atik', 'Anower']
};
const userJson= JSON.stringify(user);
console.log(userJson);

const userPerse= JSON.parse(userJson);
console.log(userPerse);
