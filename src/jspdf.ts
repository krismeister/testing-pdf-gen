import jsPDF from "jspdf";


(async () => {

  let doc = new jsPDF('portrait', 'in', 'letter', false);

  const simpleHtml = `
    <h1 style="font-size:15px;text-align:center;color:#cc00ff">
    Hi this is a basic title
    </h1>
    <p style="font-size:12px;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet libero volutpat, molestie lorem iaculis, molestie ipsum. Maecenas nunc lorem, egestas vel mollis ac, viverra vel purus. Fusce a magna facilisis, cursus lacus vel, efficitur enim. Fusce eros massa, eleifend sed neque feugiat, feugiat elementum tortor. Morbi rutrum tincidunt arcu bibendum pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque tempor sem justo, a molestie leo ultricies luctus. Nullam lacinia interdum orci, eget lacinia ante placerat non. Mauris quis faucibus augue, id sodales nunc.
    </p>
    <p>
    Nullam vitae velit porttitor, sagittis sapien sed, vulputate quam. Etiam eget euismod nisl, vitae consectetur justo. Suspendisse suscipit, urna sit amet gravida hendrerit, lorem est consequat velit, id tincidunt purus enim sit amet massa. Donec mattis maximus eros, et sagittis arcu tincidunt sed. Integer sed elit condimentum, tincidunt leo faucibus, suscipit mauris. Morbi iaculis metus id risus faucibus, vel accumsan odio imperdiet. Cras lobortis metus a lectus ultrices scelerisque. Sed gravida molestie dictum. Duis sit amet eleifend eros. Quisque eu condimentum leo. Donec ultrices venenatis turpis nec ornare. Donec faucibus magna sed lacus cursus tristique. Morbi consectetur eleifend nisi, et facilisis arcu rutrum in. Aenean ultrices purus vitae enim gravida porttitor. Ut odio nisl, dictum a odio nec, gravida viverra eros. Maecenas mollis orci sed est luctus mollis.
    </p>
  `
  // looks to be bug from here:
  // https://github.com/MrRio/jsPDF/issues/2805
  doc.html(simpleHtml, {
    callback: function(doc) {
      console.log('reached callback')
        doc.save("jspdf-basic.pdf");
    },
  });
})();





