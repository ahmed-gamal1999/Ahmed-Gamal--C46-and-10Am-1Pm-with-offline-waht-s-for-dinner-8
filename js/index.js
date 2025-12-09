let badgeLevel = document.getElementById("badgeLevel");
let badgeCuisine = document.getElementById("badgeCuisine");
let foodNameAdress = document.getElementById("foodName");
let foodDesc = document.getElementById("foodDesc");
let timePrep = document.getElementById("timePrep");
let timeCook = document.getElementById("timeCook");
let numberPeople = document.getElementById("numberPeople");
let photoHero = document.getElementById("photoHero");
let rating = document.getElementById("rating");
let review = document.getElementById("review");

let ingredientsTab = document.getElementById("ingredientsTabButton");
let instructionsTab = document.getElementById("instructionsTabButton");
let nutritionTab = document.getElementById("nutritionTabButton");
let ChefsTab = document.getElementById("ChefsTabButton");

let ingredientBox = document.getElementById("ingredientBox");
let instructionBox = document.getElementById("instructionBox");
let nutritionBox = document.getElementById("nutritionBox");
let chefsBox = document.getElementById("chefsBox");

let activeTab = "ingredientsSelect";
let currentQuote;
let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("d-none");
});

let quotes = [
  {
    name: "Margherita Pizza",
    desc: "Classic Italian pizza with fresh mozzarella and basil",
    bLevel: "Easy",
    bCuisine: "Italian",
    timePrep: "30 min",
    timeCook: "12 min",
    numberPeople: "2 people",
    photo: "./imgUpdate/pizza.JPG",
    rating: "4.7",
    review: "(389 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Two cups of finely sifted wheat flour</li>
      <li>One cup warm water mixed with yeast</li>
      <li>One tablespoon dry active yeast powder</li>
      <li>Half cup of homemade tomato sauce</li>
      <li>Fresh mozzarella cheese slices for topping</li>
      <li>Fresh basil leaves added on top</li>
      <li>Extra virgin olive oil for drizzling</li>
      <li>A pinch of sea salt for taste</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Bake for 12 minutes.</li>
    <li>Prepare pizza dough.</li>
    <li>Spread tomato sauce.</li>
    <li>Add cheese and basil.</li>
    <li>Spread tomato sauce.</li>
    </ol>`,
    Calories: "420 kcal",
    Protein: "24g",
    Carbohydrates: "68g",
    Fat: "22g",
    Fiber: "4g",
    Sodium: "920mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Use fresh mozzarella for best melt
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Stretch dough gently avoid tearing completely
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Bake on preheated hot stone surface
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Add basil after baking finishes completely
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Drizzle olive oil lightly before serving
              </span>
            </div>`,
  },
  {
    name: "Koshary",
    desc: "Famous Egyptian street food",
    bLevel: "Medium",
    bCuisine: "Egyptian",
    timePrep: "30 min",
    timeCook: "25 min",
    numberPeople: "4 people",
    photo: "./imgUpdate/photo.jpg",
    rating: "4.9",
    review: "(1000 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>One cup of well-cooked Egyptian rice</li>
      <li>Half cup brown lentils fully boiled</li>
      <li>Fifty grams of small pasta cooked</li>
      <li>One cup of fresh tomato sauce</li>
      <li>Fried onions sprinkled on top generously</li>
      <li>Chickpeas boiled and added for taste</li>
      <li>Vegetable oil for frying onions lightly</li>
      <li>Salt and spices added to flavor</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Cook rice and lentils.</li>
    <li>Boil pasta.</li>
    <li>Mix everything.</li>    
    <li>Add cheese and basil.</li>
    <li>Spread tomato sauce.</li>
    </ol>`,
    Calories: "720 kcal",
    Protein: "22g",
    Carbohydrates: "110g",
    Fat: "18g",
    Fiber: "9g",
    Sodium: "880mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Use fresh lentils for authentic flavor
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Fry onions slowly for perfect crispiness
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Balance rice and pasta proportions carefully
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Serve koshary hot immediately after mixing
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Adjust spicy sauce to personal preference
              </span>
            </div>`,
  },
  {
    name: "Chicken Shawarma",
    desc: "Middle Eastern spiced chicken wrap",
    bLevel: "Easy",
    bCuisine: "Arabic",
    timePrep: "25 min",
    timeCook: "15 min",
    numberPeople: "3 people",
    photo: "./imgUpdate/shawrma.JPEG",
    rating: "4.8",
    review: "(510 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Boneless chicken pieces marinated with spices</li>
      <li>Fresh yogurt mixed with garlic paste</li>
      <li>Pita bread warmed and ready for serving</li>
      <li>Spices blended together for perfect taste</li>
      <li>Olive oil brushed over chicken lightly</li>
      <li>Lemon juice squeezed over grilled chicken</li>
      <li>Fresh parsley sprinkled on top before serving</li>
      <li>Salt and pepper adjusted to flavor preference</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Marinate chicken.</li>
    <li>Grill until done.</li>
    <li>Serve in pita bread.</li>    
    <li>Add cheese and basil.</li>
    <li>Spread tomato sauce.</li>
    </ol>`,
    Calories: "530 kcal",
    Protein: "36g",
    Carbohydrates: "45g",
    Fat: "24g",
    Fiber: "5g",
    Sodium: "880mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Marinate chicken overnight for deeper flavor
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Use high heat for juicy texture
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Slice chicken thin after resting
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Warm pita bread before assembling wraps
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Add garlic sauce for authentic taste
              </span>
            </div>`,
  },
  {
    name: "Beef Burger",
    desc: "Juicy grilled beef burger with cheese",
    bLevel: "Easy",
    bCuisine: "American",
    timePrep: "20 min",
    timeCook: "10 min",
    numberPeople: "2 people",
    photo: "./imgUpdate/burger.jpg",
    rating: "4.5",
    review: "(300 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Grilled beef patties cooked over high flame</li>
      <li>Burger buns toasted and slightly buttered</li>
      <li>Cheddar cheese slices melted on patties</li>
      <li>Fresh lettuce leaves washed and added</li>
      <li>Onion slices cut thinly for topping</li>
      <li>Tomato slices added for extra flavor</li>
      <li>Pickles and sauces spread evenly on bun</li>
      <li>Salt and pepper sprinkled for perfect taste</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Grill patties.</li>    
    <li>Add cheese and basil.</li>
    <li>Spread tomato sauce.</li>
    <li>Add cheese and assemble burger.</li>
    <li>Grill patties.</li>    
    </ol>`,
    Calories: "640 kcal",
    Protein: "32g",
    Carbohydrates: "48g",
    Fat: "35g",
    Fiber: "3g",
    Sodium: "990mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Do not overmix beef before shaping
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Season patties only right before grilling
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Flip burger once for juicy result
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Toast buns lightly for better texture
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Let burger rest before final serving
              </span>
            </div>`,
  },
  {
    name: "Pasta Alfredo",
    desc: "Creamy pasta with garlic and parmesan",
    bLevel: "Medium",
    bCuisine: "Italian",
    timePrep: "20 min",
    timeCook: "20 min",
    numberPeople: "4 people",
    photo: "./imgUpdate/pasta.jpg",
    rating: "4.6",
    review: "(275 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Pasta boiled until perfectly tender and soft</li>
      <li>Fresh cream added to make rich sauce</li>
      <li>Garlic minced and lightly sautéed in oil</li>
      <li>Parmesan cheese grated for creamy texture</li>
      <li>Salt and pepper sprinkled to taste nicely</li>
      <li>Butter melted for smoother, richer consistency</li>
      <li>Parsley chopped finely and sprinkled on top</li>
      <li>Nutmeg added slightly for extra depth flavor</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Boil pasta.</li>
    <li>Prepare sauce.</li>    
    <li>Add cheese and basil.</li>
    <li>Spread tomato sauce.</li>
    <li>Mix and serve.</li>
    </ol>`,
    Calories: "670 kcal",
    Protein: "20g",
    Carbohydrates: "71g",
    Fat: "32g",
    Fiber: "4g",
    Sodium: "910mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Use freshly grated parmesan for smoother richer sauce texture tonight
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Cook pasta just until al dente for perfect bite always
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Warm cream gently before adding to prevent sauce separation issues
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Reserve pasta water to adjust sauce consistency easily anytime needed
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Add garlic slowly in butter to avoid bitter flavor development
              </span>
            </div>`,
  },
  {
    name: "Caesar Salad",
    desc: "Classic salad with creamy dressing",
    bLevel: "Easy",
    bCuisine: "Mediterranean",
    timePrep: "10 min",
    timeCook: "0 min",
    numberPeople: "2 people",
    photo: "./imgUpdate/salad.jpg",
    rating: "4.3",
    review: "(210 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Romaine lettuce chopped finely for fresh taste</li>
      <li>Croutons added for crispy texture and flavor</li>
      <li>Parmesan cheese shaved thinly over salad</li>
      <li>Caesar dressing mixed evenly on lettuce leaves</li>
      <li>Black pepper ground freshly for extra taste</li>
      <li>Lemon juice squeezed lightly to enhance flavor</li>
      <li>Anchovy fillets optional for traditional taste</li>
      <li>Salt sprinkled carefully for balanced seasoning</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Chop lettuce.</li>
    <li>Add dressing.</li>
    <li>Coat shrimp.</li>
    <li>Fry in oil.</li>
    <li>Top with cheese.</li>
    </ol>`,
    Calories: "320 kcal",
    Protein: "11g",
    Carbohydrates: "28g",
    Fat: "18g",
    Fiber: "3g",
    Sodium: "780mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Dry lettuce thoroughly before dressing to prevent watery salad texture
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Use freshly grated parmesan for stronger flavor and better melt
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Add dressing gradually to control coating and avoid oversaturated leaves
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Toss gently with hands for even coverage without bruising leaves
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Serve immediately after tossing to keep croutons crisp and fresh
              </span>
            </div>`,
  },
  {
    name: "Fried Shrimp",
    desc: "Crispy golden fried shrimp",
    bLevel: "Medium",
    bCuisine: "Seafood",
    timePrep: "20 min",
    timeCook: "10 min",
    numberPeople: "3 people",
    photo: "./imgUpdate/shrimp.jpg",
    rating: "4.6",
    review: "(260 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Fresh shrimp peeled and deveined carefully before frying</li>
      <li>Flour mixed with salt and pepper for coating</li>
      <li>Eggs beaten lightly for batter preparation purposes</li>
      <li>Breadcrumbs coated evenly on shrimp pieces thoroughly</li>
      <li>Vegetable oil heated in pan for frying shrimp</li>
      <li>Shrimp fried until golden brown and crispy</li>
      <li>Drained on paper towels to remove excess oil</li>
      <li>Lemon wedges served alongside for fresh taste</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Coat shrimp.</li>
    <li>Fry in oil.</li>    
    <li>Coat shrimp.</li>
    <li>Fry in oil.</li>
    <li>Drain and serve.</li>
    </ol>`,
    Calories: "560 kcal",
    Protein: "28g",
    Carbohydrates: "40g",
    Fat: "31g",
    Fiber: "2g",
    Sodium: "900mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                جفف الجمبري تماما قبل التغليف لتحصل على قرمشة مثالية دائمًا
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                استخدم زيتا ساخنا جدا ليغلق الطبقة بسرعة وبانتظام من الخارج
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                لا تزدحم المقلاة بالجمبري حتى لا تنخفض الحرارة فجأة أبدا
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                اقله على دفعات صغيرة لتحصل على لون ذهبي متجانس دائمًا
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                صفه على مناديل ورقية فورا للحفاظ على القرمشة أطول وقتا
              </span>
            </div>`,
  },
  {
    name: "Grilled Chicken",
    desc: "Healthy grilled chicken breast",
    bLevel: "Easy",
    bCuisine: "Mediterranean",
    timePrep: "15 min",
    timeCook: "20 min",
    numberPeople: "2 people",
    photo: "./imgUpdate/chicken.jpg",
    rating: "4.4",
    review: "(190 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Chicken breasts seasoned with salt, pepper, and herbs</li>
      <li>Olive oil brushed lightly for grilling preparation</li>
      <li>Garlic minced and rubbed onto chicken surface</li>
      <li>Fresh lemon juice squeezed over for flavor</li>
      <li>Spices mixed for Mediterranean taste consistency</li>
      <li>Chicken grilled over medium heat until cooked</li>
      <li>Rested before slicing for juicy tenderness inside</li>
      <li>Optional parsley garnish added before serving plate</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Season chicken.</li>
    <li>Grill until done.</li>
    <li>Serve hot.</li>
    <li>Coat shrimp.</li>
    <li>Fry in oil.</li>
    </ol>`,
    Calories: "390 kcal",
    Protein: "41g",
    Carbohydrates: "6g",
    Fat: "18g",
    Fiber: "1g",
    Sodium: "720mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                انقع الدجاج بالبهارات والليمون لساعتين لنكهة أعمق وأغنى جدا دائما
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                سخن الشواية جيدا قبل وضع الدجاج لضمان تسوية متساوية كاملة
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                اقلب قطع الدجاج مرة واحدة فقط للحفاظ على العصارة بداخله
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                ادهن الدجاج بزيت خفيف لمنع الالتصاق وإعطاء لون مشهي جميل
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                اترك الدجاج يرتاح دقائق بعد الشوي لتوزيع العصارة داخليا جيدا
              </span>
            </div>`,
  },
  {
    name: "Tuna Sandwich",
    desc: "Quick healthy tuna sandwich",
    bLevel: "Easy",
    bCuisine: "International",
    timePrep: "10 min",
    timeCook: "0 min",
    numberPeople: "1 person",
    photo: "./imgUpdate/tuna.jpg",
    rating: "4.2",
    review: "(140 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Canned tuna mixed with mayonnaise and seasoning carefully</li>
      <li>Bread slices toasted lightly for crisp texture</li>
      <li>Lettuce leaves washed and placed inside sandwich</li>
      <li>Tomato slices added evenly for extra flavor</li>
      <li>Pickles cut thinly and layered on top</li>
      <li>Salt and pepper sprinkled to taste nicely</li>
      <li>Sandwich pressed lightly for better combination</li>
      <li>Optional cheese slice added for creamy taste</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Mix tuna with mayo.</li>
    <li>Fill sandwich.</li>
    <li>Serve fresh.</li>    
    <li>Coat shrimp.</li>
    <li>Fry in oil.</li>
    </ol>`,
    Calories: "350 kcal",
    Protein: "26g",
    Carbohydrates: "32g",
    Fat: "14g",
    Fiber: "3g",
    Sodium: "620mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                استخدم تونا طازجة مع قليل من المايونيز لتعزيز الطعم الغني
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                اختر خبز طري أو محمص قليلا لإحساس قرمشي ممتاز دائما
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                أضف شرائح طماطم وخس طازج لمزيج متوازن ولذيذ للغاية
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                توزيع المكونات بالتساوي يمنع التكتل ويجعل كل قضمة ممتعة
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                يمكن إضافة شرائح خيار مخلل لتعزيز النكهة وقليل من الحموضة
              </span>
            </div>`,
  },
  {
    //asddddddddddddddddddddddddd
    name: "Veggie Stir Fry",
    desc: "Quick and colorful vegetable stir fry",
    bLevel: "Easy",
    bCuisine: "Asian",
    timePrep: "15 min",
    timeCook: "10 min",
    numberPeople: "3 people",
    photo: "./imgUpdate/veggie.jpg",
    rating: "4.5",
    review: "(220 reviews)",
    recipes: `<ol class="m-0 ingredients-list">
      <li>Broccoli florets chopped for uniform stir fry cooking</li>
      <li>Carrots julienned thinly for crisp texture preparation</li>
      <li>Bell peppers sliced colorful for vibrant dish</li>
      <li>Soy sauce mixed with garlic and sesame oil</li>
      <li>Garlic minced finely for aromatic flavoring effect</li>
      <li>Ginger grated and added for extra spiciness taste</li>
      <li>Vegetable oil heated before adding vegetables slowly</li>
      <li>Green onions sliced and sprinkled before serving</li>
    </ol>`,
    Instructions: `<ol class="m-0 Instructions-list mt-4">
    <li>Chop vegetables.</li>
    <li>Stir fry in pan.</li>
    <li>Add sauce and serve.</li>    
    <li>Coat shrimp.</li>
    <li>Fry in oil.</li>
    </ol>`,
    Calories: "310 kcal",
    Protein: "12g",
    Carbohydrates: "35g",
    Fat: "14g",
    Fiber: "5g",
    Sodium: "720mg",
    Chefs: `<div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Use fresh, colorful vegetables for vibrant flavor and appealing presentation.
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Cut all vegetables uniformly to ensure even cooking and texture.
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Heat the pan properly before adding vegetables for perfect stir-fry.
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Add garlic and ginger for aromatic and spicy flavor enhancement.
              </span>
            </div>
            <div class="d-flex gap-2 rounded-3">
              <i class="fa-solid fa-circle-check align-self-center"></i>
              <span>
                Serve immediately after cooking to preserve freshness and crispiness taste.
              </span>
            </div>`,
  },
];

function generate() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];

  badgeLevel.innerHTML = currentQuote.bLevel;
  badgeCuisine.innerHTML = currentQuote.bCuisine;
  foodNameAdress.innerHTML = currentQuote.name;
  foodDesc.innerHTML = currentQuote.desc;
  timePrep.innerHTML = currentQuote.timePrep;
  timeCook.innerHTML = currentQuote.timeCook;
  numberPeople.innerHTML = currentQuote.numberPeople;
  photoHero.setAttribute("src", currentQuote.photo);
  rating.innerHTML = currentQuote.rating;
  review.innerHTML = currentQuote.review;

  tabsSelect(activeTab);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function tabsSelect(tab) {
  hideAll();
  removeActive();
  activeTab = tab;

  if (tab == "ingredientsSelect") {
    ingredientBox.classList.remove("d-none");
    ingredientsTab.classList.add("active");
    ingredientBox.innerHTML = currentQuote.recipes;
  } else if (tab == "instructionsSelect") {
    instructionBox.classList.remove("d-none");
    instructionsTab.classList.add("active");
    instructionBox.innerHTML = currentQuote.Instructions;
  } else if (tab == "nutritionSelect") {
    nutritionBox.classList.remove("d-none");
    nutritionTab.classList.add("active");

    nutritionBox.innerHTML = `
    <div class="row g-2 handle-break-point">
      <div class="col-sm-12 col-xl-6 ">
        <div class="calories boxes d-flex justify-content-between align-items-center rounded-3">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-fire fs-5 icon-calorie p-2 rounded-3 icon-Common-style"></i>
            <span class="fs-5 m-0">Calories</span>
          </div>
          <span class="fs-5 fw-bold">${currentQuote.Calories}</span>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6 ">
        <div class="calories boxes d-flex justify-content-between align-items-center rounded-3">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-dumbbell fs-5 p-2 rounded-3 icon-Common-style icon-protein"></i>
            <span class="fs-5 m-0">Protein</span>
          </div>
          <span class="fs-5 fw-bold">${currentQuote.Protein}</span>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6 ">
        <div class="calories boxes d-flex justify-content-between align-items-center rounded-3">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-leaf fs-5 p-2 rounded-3 icon-Common-style icon-carbohydrates"></i>
            <span class="fs-5 m-0">Carbohydrates</span>
          </div>
          <span class="fs-5 fw-bold">${currentQuote.Carbohydrates}</span>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6 ">
        <div class="calories boxes d-flex justify-content-between align-items-center rounded-3">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-droplet fs-5 p-2 rounded-3 icon-Common-style icon-fat"></i>
            <span class="fs-5 m-0">Fat</span>
          </div>
          <span class="fs-5 fw-bold">${currentQuote.Fat}</span>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6 ">
        <div class="calories boxes d-flex justify-content-between align-items-center rounded-3">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-tree fs-5 p-2 rounded-3 icon-Common-style icon-fiber"></i>
            <span class="fs-5 m-0">Fiber</span>
          </div>
          <span class="fs-5 fw-bold">${currentQuote.Fiber}</span>
        </div>
      </div>
      <div class="col-sm-12 col-xl-6 ">
        <div class="calories boxes d-flex justify-content-between align-items-center rounded-3">
          <div class="d-flex gap-2 align-items-center">
            <i class="fa-solid fa-box fs-5 p-2 rounded-3 icon-Common-style icon-Sodium"></i>
            <span class="fs-5 m-0">Sodium</span>
          </div>
          <span class="fs-5 fw-bold">${currentQuote.Sodium}</span>
        </div>
      </div>
    </div>`;
  } else if (tab == "ChefsSelect") {
    chefsBox.classList.remove("d-none");
    ChefsTab.classList.add("active");
    chefsBox.innerHTML = currentQuote.Chefs;
  }
}

function hideAll() {
  ingredientBox.classList.add("d-none");
  instructionBox.classList.add("d-none");
  nutritionBox.classList.add("d-none");
  chefsBox.classList.add("d-none");
}

function removeActive() {
  ingredientsTab.classList.remove("active");
  instructionsTab.classList.remove("active");
  nutritionTab.classList.remove("active");
  ChefsTab.classList.remove("active");
}

generate();
