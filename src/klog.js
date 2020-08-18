/**
 * klog.js
 * Copyright © 2020 Ris Adams
 * License: MIT
 */

export const klog = {
  default: { bg: "", fg: "" },
  success: { bg: "", fg: "#99CC99" },
  debug: { bg: "", fg: "", size: "11px" },
  info: { bg: "", fg: "#336699", size: "11px" },
  warn: { bg: "", fg: "#CC333", size: "16px" },
  error: { bg: "#AA0114", fg: "#FFE9E8", size: "24px" },
  bigError: { bg: "#AA0114", fg: "#FFE9E8", size: "36px" },

  memes: {
    "10 Guy": "https://i.imgur.com/LaENqOV.jpg",
    "3rd World Success Kid": "https://i.imgur.com/WA5duA1.jpg",
    "90's Problems": "https://i.imgur.com/tL47qtp.jpg",
    "Aaand It's Gone": "https://i.imgur.com/yf12saq.jpg",
    "Actual Advice Mallard": "https://i.imgur.com/WymFmVy.jpg",
    "Advice Dog": "https://i.imgur.com/Qk0VO6D.jpg",
    "Advice God": "https://i.imgur.com/xH2fSFg.jpg",
    "Almost Politically Correct Redneck": "https://i.imgur.com/YqLgINf.jpg",
    "Am I The Only One": "https://i.imgur.com/gS9YL5U.jpg",
    "Ancient Aliens": "https://i.imgur.com/NfCknz0.jpg",
    "Annoyed Picard": "https://i.imgur.com/s9GmfSS.jpg",
    "Annoying Childhood Friend": "https://i.imgur.com/27VCyQw.jpg",
    "Annoying Facebook Girl": "https://i.imgur.com/ccczyGt.jpg",
    "Anti-Joke Chicken (Rooster)": "https://i.imgur.com/KOsW0jh.jpg",
    "Awkward Penguin": "https://i.imgur.com/ez1tQrq.jpg",
    "Back In My Day Grandpa": "https://i.imgur.com/zuJSZp8.jpg",
    "Bad Advice Mallard": "https://i.imgur.com/QEPvL2B.jpg",
    "Bad Luck Brian": "https://i.imgur.com/sRW8BiO.jpg",
    "Bear Grylls": "https://i.imgur.com/6Spqy1D.jpg",
    "Brace Yourself": "https://i.imgur.com/NhIq0LY.jpg",
    "Captain Obvious": "https://i.imgur.com/DmUcxBu.jpg",
    "Chemistry Cat": "https://i.imgur.com/8agP4Xe.jpg",
    "College Freshman": "https://i.imgur.com/2Ynyv9t.jpg",
    "College Liberal": "https://i.imgur.com/OWfvSFE.jpg",
    "Condescending Wonka": "https://i.imgur.com/D0e5fgL.jpg",
    "Confession Bear": "https://i.imgur.com/kH1SKhp.jpg",
    "Confession Kid": "https://i.imgur.com/jhOxR12.jpg",
    "Confused Gandalf": "https://i.imgur.com/iIb5SEo.jpg",
    "Conspiracy Keanu": "https://i.imgur.com/pFyk3J7.jpg",
    "Courage Wolf": "https://i.imgur.com/H5qoXFb.jpg",
    "Dating Site Murderer": "https://i.imgur.com/jffNNql.jpg",
    "Depression Dog": "https://i.imgur.com/wgad6P8.jpg",
    "Drunk Baby": "https://i.imgur.com/QvZdbRE.jpg",
    "English Motherfucker": "https://i.imgur.com/sJThEC0.jpg",
    "Evil Plotting Raccoon": "https://i.imgur.com/xMslWFf.jpg",
    "First Day On The Internet Kid": "https://i.imgur.com/TWfdmVu.jpg",
    "First World Cat Problems": "https://i.imgur.com/0vR5Slq.jpg",
    "First World Problem": "https://i.imgur.com/ATcIl08.jpg",
    "Forever Resentful Mother": "https://i.imgur.com/pIrdwo2.jpg",
    "Foul Bachelor Frog": "https://i.imgur.com/JUFmusm.jpg",
    "Foul Bachelorette Frog": "https://i.imgur.com/dYf971U.jpg",
    "Friendzone Fiona": "https://i.imgur.com/Qu1eedL.jpg",
    "Frustrated Farnsworth": "https://i.imgur.com/U3SElKP.jpg",
    "Fuck Me, Right?": "https://i.imgur.com/J9gfxsx.jpg",
    "Gangster Baby": "https://i.imgur.com/C3XhI56.jpg",
    "Good Girl Gina": "https://i.imgur.com/qK6lYr2.jpg",
    "Good Guy Greg": "https://i.imgur.com/UXMPoKN.jpg",
    "Grandma Finds The Internet": "https://i.imgur.com/xPfGYqu.jpg",
    "Grinds My Gears": "https://i.imgur.com/t4JqU1j.jpg",
    "Grumpy Cat (Tard)": "https://i.imgur.com/dU5CDxN.jpg",
    "High Expectations Asian Father": "https://i.imgur.com/7QeB9LI.jpg",
    "Hipster Barista": "https://i.imgur.com/AbWxdy2.jpg",
    "Horrifying House Guest": "https://i.imgur.com/DxmoFp1.jpg",
    "I Dare You Samuel Jackson": "https://i.imgur.com/UQtpdqj.jpg",
    "I Should Buy A Boat": "https://i.imgur.com/XqlqPxn.jpg",
    "I Too Like To Live Dangerously": "https://i.imgur.com/qF70EL9.jpg",
    "Idiot Nerd Girl": "https://i.imgur.com/8hYPYwd.jpg",
    "Insanity Wolf": "https://i.imgur.com/GOOdg3k.jpg",
    "Joker Mind Loss": "https://i.imgur.com/qQIRaOD.jpg",
    "Joseph Ducreux": "https://i.imgur.com/QL7TyR9.jpg",
    "Lame Joke Eel": "https://i.imgur.com/oQXw3jF.jpg",
    "Lame Pun Raccoon": "https://i.imgur.com/nvALRK3.jpg",
    "Lazy College Senior": "https://i.imgur.com/PpkVfzz.jpg",
    "Mad Karma": "https://i.imgur.com/G0QMPum.jpg",
    "Masturbating Spidey": "https://i.imgur.com/dZ7AB4c.jpg",
    "Matrix Morpheus": "https://i.imgur.com/8Yrw6cZ.jpg",
    "Mayonnaise Patrick": "https://i.imgur.com/5jE0Y7f.jpg",
    "Musically Oblivious 8th Grader": "https://i.imgur.com/l5YHN5D.jpg",
    "Not Sure Fry": "https://i.imgur.com/7rFgBB1.jpg",
    "Oblivious Suburban Mom": "https://i.imgur.com/Y7o7UJs.jpg",
    "One Does Not Simply": "https://i.imgur.com/7LrwR1Y.jpg",
    "Overly Attached Girlfriend": "https://i.imgur.com/5blLJLR.jpg",
    "Overly Manly Man": "https://i.imgur.com/dOSn9Na.jpg",
    "Paranoid Parrot": "https://i.imgur.com/KooYHdg.jpg",
    "Pepperidge Farm Remembers": "https://i.imgur.com/uFde4v5.jpg",
    "Philosoraptor": "https://i.imgur.com/eERhI5h.jpg",
    "Priority Peter": "https://i.imgur.com/BBEFk0e.jpg",
    "Rasta Science Teacher": "https://i.imgur.com/Js6Ai5T.jpg",
    "Redditor's Wife": "https://i.imgur.com/d1XfJeD.jpg",
    "Revenge Band Kid": "https://i.imgur.com/dlvmaRI.jpg",
    "Schrute Facts": "https://i.imgur.com/UxcvPwT.jpg",
    "Scumbag Brain": "https://i.imgur.com/OZhhZdS.jpg",
    "Scumbag Stacy": "https://i.imgur.com/Qqz1axp.jpg",
    "Scumbag Steve": "https://i.imgur.com/Rfvoc0Y.jpg",
    "Sexually Oblivious Rhino": "https://i.imgur.com/RoaNuEC.jpg",
    "Sheltering Suburban Mom": "https://i.imgur.com/vMkSofv.jpg",
    "Shut Up And Take My Money": "https://i.imgur.com/uWe0rtQ.jpg",
    "Skeptical Third World Kid": "https://i.imgur.com/uwAusxV.jpg",
    "Smug Spongebob": "https://i.imgur.com/OTTRjrv.jpg",
    "Socially Awesome Penguin": "https://i.imgur.com/S6WgQW7.jpg",
    "Success Kid": "https://i.imgur.com/ZibijBz.jpg",
    "Successful Black Man": "https://i.imgur.com/ogIm0cy.jpg",
    "Sudden Clarity Clarence": "https://i.imgur.com/N3Xmfbe.jpg",
    "Tech Impaired Duck": "https://i.imgur.com/riz28ci.jpg",
    "The Most Interesting Man In The World": "https://i.imgur.com/MGv15MH.jpg",
    "The Rent Is Too High": "https://i.imgur.com/r5WLktQ.jpg",
    "Tough Spongebob": "https://i.imgur.com/2w0F1HX.jpg",
    "Unhelpful Highschool Teacher": "https://i.imgur.com/ohbGhuD.jpg",
    "Vengeance Dad": "https://i.imgur.com/0nUStsa.jpg",
    "What Year Is It?": "https://i.imgur.com/fj79hQS.jpg",
    "X, X Everywhere": "https://i.imgur.com/GGy94Gt.jpg",
    "Yeah That'd Be Great": "https://i.imgur.com/nz9M2pl.jpg",
    "Yo Dawg Xzibit": "https://i.imgur.com/XOyGqF2.jpg",
    "You're Bad And You Should Feel Bad": "https://i.imgur.com/YsabGnQ.jpg",
    "You're Gonna Have A Bad Time": "https://i.imgur.com/2tNR7P7.jpg",
  },

  //-------------------------------------------------------------------------------------------

  getBox: function (width, height) {
    return {
      string: "+",
      style:
        "font-size: 1px; padding: 0 " +
        Math.floor(width / 2) +
        "px; line-height: " +
        height +
        "px;",
    };
  },

  drawMemeText: function (ctx, type, text, width, y) {
    var _ = this;
    text = text.toUpperCase();
    //Determine the font size
    if (text.length < 24) {
      var val = Math.max(0, text.length - 12),
        size = 70 + val * -3;

      _.drawText(ctx, size, text, width / 2, y);
    } else if (text.length < 29) {
      _.drawText(ctx, 40, text, width / 2, y);
    } else {
      var strs = _.wrap(text, 27);
      strs.forEach(function (str, i) {
        _.drawText(
          ctx,
          40,
          str,
          width / 2,
          type == "lower" ? y - (strs.length - 1) * 40 + i * 40 : y + i * 40
        );
      });
    }
  },

  drawText: function (ctx, size, text, x, y) {
    //Set the text styles
    ctx.font = "bold " + size + "px Impact";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 7;
    ctx.strokeStyle = "#000";
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  },

  wrap: function (text, num) {
    var output = [],
      split = text.split(" ");

    var str = [];
    for (var i = 0, cache = split.length; i < cache; i++) {
      if ((str + split[i]).length < num) str.push(split[i]);
      else {
        output.push(str.join(" "));
        str.length = 0;
        str.push(split[i]);
      }
    }

    //Push the final line
    output.push(str.join(" "));

    return output;
  },

  meme: function (upper, lower, image, width, height) {
    var _ = this;
    if (!upper)
      console.error(
        "Yo, you forgot the text for the upper part of the meme. The bit at the top. Yeah, that bit."
      );
    if (!lower)
      console.error("You forgot the text for the bottom of the meme, stupid.");
    if (!image)
      console.error(
        "Dude, you forgot the meme type or url for the background image (CORS enabled, *hint* imgur *hint*). To see a list of supported memes, hit `console.meme()`"
      );
    if (!upper && !lower && !image)
      return console.log("> " + Object.keys(_.memes).join("\n> "));

    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      width = width || 500,
      height = width || 500,
      //I tweaked it at these dimensions,
      //So everything scales from here
      _w = 500,
      _h = 500;

    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = function () {
      canvas.width = width;
      canvas.height = height;

      var text = upper.toUpperCase();

      ctx.scale(width / 500, height / 500);

      //Draw the background
      ctx.drawImage(this, 0, 0, _w, _h);

      _.drawMemeText(ctx, "upper", upper, _w, 50); //upper
      _.drawMemeText(ctx, "lower", lower, _w, _h - 50); //upper

      _.image(canvas.toDataURL());
    };

    if (_.memes[image]) var url = _.memes[image];
    else var url = image;

    img.src = url;
  },

  image: function (url, scale) {
    var _ = this;
    scale = scale || 1;
    var img = new Image();

    img.onload = function () {
      var dim = _.getBox(this.width * scale, this.height * scale);
      console.log(
        "%c" + dim.string,
        dim.style +
          "background: none,url(" +
          url +
          "); background-size: " +
          this.width * scale +
          "px " +
          this.height * scale +
          "px; color: transparent;"
      );
    };

    img.src = url;
  },

  //-------------------------------------------------------------------------------------------

  write: function (msg) {
    var m = new Message(msg, this.default);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeSuccess: function (msg) {
    var m = new Message(msg, this.success);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeDebug: function (msg) {
    var m = new Message(msg, this.debug);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeInfo: function (msg) {
    var m = new Message(msg, this.info);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeWarning: function (msg) {
    var m = new Message(msg, this.warn);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeError: function (msg) {
    var m = new Message(msg, this.error);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeBigError: function (msg) {
    var m = new Message(msg, this.bigError);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
  writeCustom: function (msg, config) {
    var m = new Message(msg, config);
    console.log(
      `%c${m.Value}`,
      `color:${m.Foreground};background:${m.Background};font-size:${m.Size}`
    );
  },
};

class Message {
  constructor(msg, config) {
    this.value = msg;
    //configure overrides
    if (config.bg) {
      this.bg = config.bg;
    }
    if (config.fg) {
      this.fg = config.fg;
    }
    if (config.size) {
      this.fs = config.size;
    }
  }
  get Value() {
    return this.value;
  }
  set Value(msg) {
    this.value = msg;
  }
  get Background() {
    return this.bg;
  }
  set Background(bg) {
    this.bg = bg;
  }
  get Foreground() {
    return this.fg;
  }
  set Foreground(fg) {
    this.fg = fg;
  }
  get Size() {
    return this.fs;
  }
  set Size(fs) {
    this.fs = fs;
  }
}
