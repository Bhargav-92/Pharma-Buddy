//sk_test_51OM9xkSCfMKrHhW2igSgcVvNaxyHuGJnNFKMErbdOfxOnsPjmfyb6TbLa8H4kDIDxT8vQ2A0OBZ45URYzNDtBL7000xTalRcFt
// OKACET-COLD :- price_1OMmqaSCfMKrHhW2bAhPnIHB
// Lopamide :-  price_1OMmsCSCfMKrHhW2yvUEHvIA
// Dolo-650 :- price_1OMmt2SCfMKrHhW28D2SaC5p
// Mmalirid :- price_1OMmvUSCfMKrHhW2jnjOvFyu
// Benadryl :-  price_1OMmwKSCfMKrHhW2xZJhFFMN
// Omron :- price_1OMmxBSCfMKrHhW2eql6MQeN
// Protein Powder :-  price_1OMojkSCfMKrHhW2BU33EvpA
// Durex Invisible :-  price_1OMokJSCfMKrHhW28tNKVAMA
// Himalaya Himpyrin :-  price_1OMoknSCfMKrHhW20kdTiZpf
//  Skore :-  price_1OMolPSCfMKrHhW2yd6skR3p
// Herballkar :-  price_1OMoltSCfMKrHhW2WfoY021J
// Horlicks:-  price_1OMomLSCfMKrHhW2SxKiJp5f
// Women's Horlicks:-   price_1OMomsSCfMKrHhW2KAJM0T4y
// Sat Isabgol :-  price_1OMonaSCfMKrHhW2FbzM01J7
// Durex Massage Lube :- price_1OMooPSCfMKrHhW2PlnsTD7N
// Durex Massage Lube :- price_1OMoooSCfMKrHhW2LmNNK5UP
// Durex Massage Lube:-  price_1OMopESCfMKrHhW2Rvnpy8qe
// Metazine:-  price_1OMopfSCfMKrHhW2hb4WLRxG
// Moov :- price_1OMoq3SCfMKrHhW2rlQzLdtZ
// Durex Air :- price_1OMoqTSCfMKrHhW27GP2os34
// Ambrodil Syrup :-  price_1OMoquSCfMKrHhW2nxQe3Wdo
// Citrem:-  price_1OMorLSCfMKrHhW206xtKilM
// Biotin:-  price_1OMorkSCfMKrHhW20hPIoAB3
// Piroxicam:- price_1OMos8SCfMKrHhW2gZDFw2a7
// Pfizer Viagra:-  price_1OMosaSCfMKrHhW2sm5N7Zch
// Maple Syrup:-  price_1OMoszSCfMKrHhW23tXRYiIz
// Disprin:- price_1OMotOSCfMKrHhW2buAXzA4H

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51OM9xkSCfMKrHhW2igSgcVvNaxyHuGJnNFKMErbdOfxOnsPjmfyb6TbLa8H4kDIDxT8vQ2A0OBZ45URYzNDtBL7000xTalRcFt');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        });
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        billing_address_collection: 'required', 
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
