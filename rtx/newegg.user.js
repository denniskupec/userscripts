// ==UserScript==
// @name        Newegg RTX Checker
// @namespace   github.com/denniskupec
// @match       https://www.newegg.com/p/pl?d=rtx+30*
// @grant       GM_notification
// @grant       GM_xmlhttpRequest
// @grant       GM_openInTab
// @version     1
// @author      Dennis Kupec
// @run-at      document-end
// @noframes
// ==/UserScript==


const RELOAD_INTERVAL = 5 * 60 * 1000,
      PUSHOVER_TOKEN = '1234',
      PUSHOVER_USER = '1234';


window.setTimeout(function(){
    console.info('Checking stock...')

    let items = document.querySelectorAll('.list-wrap .item-cell')

    if (items.length > 0) {
        items.forEach(el => {
            let btn = el.querySelector('.item-button-area'),
                item_id = el.querySelector('.item-title');
      
            if (!btn || !item_id) {
                return
            }

            item_id = item_id.href.match(/(N[A-Z0-9]{14})/)

            if (btn.innerText.includes('ADD TO CART')) {
                console.info(`${item_id[1]}: ✅ CARD IN STOCK ✅`)
                console.info(`https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=${item_id[1]}`)

                GM_openInTab(`https://secure.newegg.com/Shopping/AddtoCart.aspx?Submit=ADD&ItemList=${item_id[1]}`)
                GM_openInTab('https://secure.newegg.com/shop/cart')

                GM_notification({
                    title: 'RTX 3080 IN STOCK',
                    text: 'RTX3080 available on Newegg. Added to cart!'
                })

                pushover_notify('RTX 3080 IN STOCK', 'RTX3080 available on Newegg. Added to cart.')
            }
            else {
                console.info(`${item_id[1]}: ${btn.innerText}`)
            }
        })
    }
    
    window.setTimeout(() => window.location.reload(), RELOAD_INTERVAL)
}, 3000)


function Request(url, opt={}) {
    Object.assign(opt, {
        url,
        timeout: 2000,
        responseType: 'json'
    })

    return new Promise((resolve, reject) => {
        opt.onerror = reject
        opt.ontimeout = reject
        opt.onload = resolve

        GM_xmlhttpRequest(opt)
    })
}


async function pushover_notify(title, msg) {
    let opts = {
        method: 'POST',
        data: encodeURI(`token=${PUSHOVER_TOKEN}&user=${PUSHOVER_USER}&title=${title}&message=${msg}`),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    
    return await Request('https://api.pushover.net/1/messages.json', opts)
}
