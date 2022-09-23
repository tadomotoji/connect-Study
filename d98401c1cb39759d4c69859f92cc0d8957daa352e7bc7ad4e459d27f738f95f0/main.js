//Take properties
const takePropertiesIketei = () => {
    return {
        "category_ids": (() => {
            let x = document.querySelector('#relative_word').querySelectorAll('a')
            const category_ids = [];
            for (var i = 0; i < x.length; ++i) {
                category_ids[i] = x[i].href.slice(x[i].href.search('category_id=') + 12, x[i].href.search('&') == -1 ? x[i].href.length : x[i].href.search('&'))
            }
            return category_ids
        })(),
        "code": (() => {
            return document.querySelector('#product_code_dynamic').innerHTML
        })(),
        "description": (() => {
            return document.querySelector('[name="description"').content
        })(),
        "has_stock": (() => {
            let soldOutCheck = document.querySelector('#aanotice') || document.querySelector('.soldout_notice')
            let has_stock = soldOutCheck ? false : true
            return has_stock
        })(),
        "image": (() => {
            return document.querySelector('.slick-slide').querySelector('img').src
        })(),
        "is_limited": false,
        "price": (() => {
            return document.querySelector('[itemprop=price]').innerText.split(',').join('')
        })(),
        "quantity": (() => {
            return document.querySelector('[name="quantity"]').value
        })(),
        "seller": 'store.iketei.jp',
        "seller_id": '0',
        "title": (() => {
            return document.querySelector("#_brand3").innerText
        })(),
        "unavailable": (() => {
            let soldOutCheck = document.querySelector('#aanotice') || document.querySelector('.soldout_notice')
            let unavailable = soldOutCheck ? '1' : (() => {
                let variationCheck = document.querySelector('input[type="radio"]:checked')
                return !variationCheck ? '2' : (() => {
                    let errorCheck = document.querySelector('#cartbtn_dynamic')
                    return errorCheck.style.display == 'none' ? '0' : '1';
                })()
            })();
            return unavailable
        })(),
        "url": (() => {
            return window.location.href
        })(),
        "variations": (() => {
            let checked = document.querySelector('input[type="radio"]:checked')
            if (!checked) return []
            else {
                let checkedId = checked.id;
                return [{
                    "key": "variation",
                    "value": document.querySelector(`[for=${checkedId}]`).querySelector('.c1title').firstChild.textContent
                }]
            }
        })(),
        "service_type": '1373',
        "has_option_stock": true,
        "invalidType": null
    }
}

//CSS
(() => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
    .bcTool_btn{
        height: 46px;
        width: 146px;
        background-color: #12576d;
        border: 0 none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
        line-height: 1.3;
        margin: 0;
        padding: 5px;
        text-align: center;
        text-decoration: none;
    }
    .bcTool_btn:hover {
        opacity:0.85
    }

    .bcTool_btn + .bcTool_btn {
        margin-left:5px    
    }
    

    .bcTool_btn.is-disabled {
        cursor:default;
        background-color:#cccccc;
        border:none;
        opacity: 1 !important
    }
    
    .buyee-bcF-popup-expand {
        background: none transparent;
        border: none;
        display: block;
        height: 320px;
        max-width: 1200px;
        opacity: 1;
        position: fixed;
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: none 0s ease 0s;
        visibility: visible;
        width: 100%;
        z-index:10
    }

    .bcTool{
        background-color: #5b6770;
        border: 3px solid #5b6770;
        border-radius: 4px;
        box-shadow: 0 5px 12px rgb(0 0 0 / 20%);
        margin: auto;
        padding: 0;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 98vw;
        z-index: 2147483647;
        max-width:1170px;   
        max-height: 122.688px
        overflow: hidden;
    }

    .bcTool_header{
        align-items: center;
        color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 4px 8px 5px;
    }
    
    .bcTool__heading{
        flex: none;
        font-size: 14px;
    }
    
    .bcTool__subHeading{
        display: inline-block;
        margin: auto auto auto 10px;
        font-size: 12px;
    }
    
    .bcTool__toggleBtn{
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 11px;
        letter-spacing: .1em;
        padding: 0;
        width: auto;
    }

    .is-closed .bcTool__toggleBtn.bcTool__toggleBtn--down {
        flex: none;
        margin-left: 5px;
    }

    .bcTool__toggleBtn.bcTool__toggleBtn--up {
        display: none;
    }

    .is-closed .bcTool__toggleBtn.bcTool__toggleBtn--up {
        align-items: center;
        background-color: #fff;
        border: 2px solid;
        color: #12576d;
        display: flex;
        flex-direction: row;
        height: 40px;
        justify-content: center;
        line-height: 1.1;
        padding: 5px;
        width: 180px;
    }
    
    .bcTool_main{
        background-color: #fff;
        border-radius: 2px;
        overflow: hidden;
        padding: 0;
        display:flex;
        box-sizing: inherit;
        min-height: 95.5px;
    }
    
    
    .bcTool__mainHeader{
        align-items: flex-start;
        align-content: space-between;
        display: flex;
        flex-direction: column;
        width: 210px;
        justify-content: space-between;
        padding: 10px;
        position: relative;
        flex: none;
    }

    .bcTool__mainHeader a{
        color: #12576d;
        text-decoration: none;
        font-size: 12px;
    }

    .bcTool__guideLink {
        margin: auto 5px auto 0;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 0;
        text-align-last: left;
        width: 104px;
    }

    
    .bc__buyeeLogo{
        width: 110px;
        margin-right: 5px;
    }
    
    .bcTool__guideLink{
        margin: auto 5px auto 0;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 0;
        text-align-last: left;
        width: 104px;
    }

    .bcTool__mainHeaderCont{
        justify-content: space-between;
        max-height: 50px;
        line-height: 1;
        align-items: center;
        display: inline-flex;
        width: 100%;
    }

    .bcTool__mainContents{
        background-color: #fff;
        overflow: auto;
        padding: 10px;
        flex: auto;
        align-self: center;
    }

    .bc__paragraph{
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
        overflow: hidden;
    }

    .bc__paragraph.bc__paragraph--main {
        font-size: 16px;
        font-weight: bold;
    }

    .bc__paragraph.bc__paragraph--annotation {
        font-size: 13px;
        font-weight: bold;
    }
    
    .bc__paragraph+.bc__paragraph {
        margin-top: 0.5em;
    }

    .bc__selectBox {
        align-items: center;
        border-radius: 4px;
        box-sizing: border-box;
        color: #999;
        display: inline-flex;
        height: 30px;
        overflow: inherit;
        padding: 5px;
        position: static;
        top: 10px;
        right: 10px;
        width: auto;
        z-index: 10;
    }

    .bc__selectBox select {
        appearance: none;
        background-color: transparent;
        border: none;
        color: #999;
        cursor: pointer;
        font-size: 12px;
        margin: 0;
        outline: none;
        padding: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50px;
    }

    .bcTool__main .bc__selectBox {
        position: static;
    }

    .bcTool_footer{
        background-color: #f3f3f3;
        display: flex;
        height: auto;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        flex: none;
        flex-wrap: nowrap;
        width: 220px;
    }

    .is-closed .bcTool_header{
        display:none;
    }

    .is-closed .bcTool_main{
        display:none
    }

    .bcTool.is-closed{
        border: none;
        width:194px;
        min-height: 54px;
    }


    
    `
    document.head.appendChild(styleEl);
})();

(() => {
   
    //handle Functions
    const handleTakeItem = () => {
        let bc_items=JSON.parse(localStorage.getItem('bc_items'))??{};
        let item
        //Product Page Check
        try {
            item = takePropertiesIketei()
        } catch (err) {
            alert('This is not a product page!')
            return;
        }

        //Available Check
        switch (item.unavailable){
            case "1": {
                alert("Out of stock")
                return;
            }
            case "2":{
                alert("Please select all options (quantity, size, color, etc.) for the item and proceed to order again.")
                return;
            }
            default: {
                alert("Success")
                const key = item.code + '_' + item.variations[0].value
                bc_items[key] = item
            }
            const jsonBc_items = JSON.stringify(bc_items);
            localStorage.setItem('bc_items',jsonBc_items);
        }

    }


    const handleCheckOut = () => {
        let bc_items=JSON.parse(localStorage.getItem('bc_items'))??{};
        const cartQuantity = Object.keys(bc_items).length
        if (cartQuantity === 0) alert('Cart is empty')
        else {
            console.log('Cart :');
            for (var item in bc_items) {
                if (bc_items.hasOwnProperty(item)) {
                    const itemJSON = JSON.stringify(bc_items[item]);
                    console.log(itemJSON)
                }
            }
            bc_items={};
            const jsonBc_items = JSON.stringify(bc_items);
            localStorage.setItem('bc_items',jsonBc_items);
        }
    }

    const handleCloseUp = () => {
        let bcTool = document.querySelector('#bctool');
        bcTool.classList.contains('is-closed') ? bcTool.classList.remove('is-closed') : bcTool.classList.add('is-closed');
    }

    //BuyeeCart tool
    const buyeeHTML = `<div id="bctool" class="bcTool"> 
        <div class="bcTool_header">
            <div class="bcTool__heading">Overseas Ordering Cart</div>
            <div class="bcTool__subHeading">Buyee supports international shipping from this store.</div>
            <div id="bcTool__toggleBtn--down" class="bcTool__toggleBtn bcTool__toggleBtn--down">CLOSE</div>
        </div >
        <div class="bcTool_main">
            <div class="bcTool__mainHeader">
                <img src="https://connect.buyee.jp/d98401c1cb39759d4c69859f92cc0d8957daa352e7bc7ad4e459d27f738f95f0/widget/assets/677397bcc365a7fa2351ba258471e1dc.png" alt="buyee.jp" class="bc__buyeeLogo" loading="lazy">
                <div class="bcTool__mainHeaderCont">    
                    <a href="https://media.buyee.jp/guide/bcv2/en/product.html?rc=BC_iketei_guide" class="bcTool__guideLink" target="_blank">
                        Usage Guide
                    </a>
                    <span class="bc__selectBox">
                        <i class="g-feather g-feather-globe"></i>
                        <select id="header-nav__select-culture">
                            <option value="en">English</option>
                            <option value="ja">日本語</option>
                        </select>
                    </span>
                </div>
            </div>
            <div class="bcTool__mainContents">
                <p class="bc__paragraph bc__paragraph--main">Click "Add to Cart", then click on 'Checkout' to continue your order on Buyee.</p>
                <p class="bc__paragraph bc__paragraph--annotation">Note: Please be sure to select all options (quantity, size, color, etc.) for your desired product before proceeding to order.</p>
            </div>
            <div class="bcTool_footer">
            </div>
        </div>
        <div id="bcTool__toggleBtn--up" class="bcTool__toggleBtn bcTool__toggleBtn--up">
            Overseas Ordering Cart
        </div>
    </div >
    `;

    //create iframe ?
    (() => {
        const iframe = document.createElement("div")
        iframe.innerHTML += buyeeHTML
        iframe.id = 'buyee-bcFrame'
        iframe.className = 'buyee-bcF-popup-expand'
        document.body.appendChild(iframe)
    })();

    //create take Item button
    (() => {
        const btn = document.createElement("button")
        btn.innerText = 'Take Prop'
        btn.id = 'add-button'
        btn.classList.add('bcTool_btn')
        if (window.location.href.search('products/detail.php?') === -1) {
            btn.classList.add('is-disabled');
            btn.disabled = true;
        }
        btn.onclick = handleTakeItem
        document.querySelector('.bcTool_footer').appendChild(btn)
    })();
    //create checkout button
    (() => {
        const btn = document.createElement("button")
        btn.innerText = 'Checkout'
        btn.id = 'checkout-button'
        btn.classList.add('bcTool_btn')
        btn.onclick = handleCheckOut
        document.querySelector('.bcTool_footer').appendChild(btn)
    })();


    //CLOSE-UP
    document.querySelector('#bcTool__toggleBtn--down').onclick = handleCloseUp
    document.querySelector('#bcTool__toggleBtn--up').onclick = handleCloseUp

})()
