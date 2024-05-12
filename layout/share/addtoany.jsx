/**
 * AddToAny share buttons JSX component.
 * @module view/share/addtoany
 */
const { Component, Fragment } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

/**
 * AddToAny share buttons JSX component.
 *
 * @see https://www.addtoany.com/buttons/
 * @example
 * <AddToAny />
 */
class AddToAny extends Component {
    render() {
        return <Fragment>


<div class="a2a_kit a2a_kit_size_32 a2a_default_style" >    
<a class="a2a_dd" style="float: right;" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_qzone" style="float: right;"></a>
<a class="a2a_button_wechat" style="float: right;"></a>
<a class="a2a_button_sina_weibo" style="float: right;"></a>
<a class="a2a_button_copy_link" style="float: right;"></a>
</div>
<script>
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
a2a_config.locale = "zh-CN";
</script>
<script async src="https://static.addtoany.com/menu/page.js"></script>


        </Fragment>;
    }
}

/**
 * Cacheable AddToAny share buttons JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <AddToAny.Cacheable />
 */
AddToAny.Cacheable = cacheComponent(AddToAny, 'share.addtoany', props => {
    return {};
});

module.exports = AddToAny;