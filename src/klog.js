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
    "10 Guy": "http://i.imgur.com/LaENqOV.jpg",
    "3rd World Success Kid": "http://i.imgur.com/WA5duA1.jpg",
    "90's Problems": "http://i.imgur.com/tL47qtp.jpg",
    "Aaand It's Gone": "http://i.imgur.com/yf12saq.jpg",
    "Actual Advice Mallard": "http://i.imgur.com/WymFmVy.jpg",
    "Advice Dog": "http://i.imgur.com/Qk0VO6D.jpg",
    "Advice God": "http://i.imgur.com/xH2fSFg.jpg",
    "Almost Politically Correct Redneck": "http://i.imgur.com/YqLgINf.jpg",
    "Am I The Only One": "http://i.imgur.com/gS9YL5U.jpg",
    "Ancient Aliens": "http://i.imgur.com/NfCknz0.jpg",
    "Annoyed Picard": "http://i.imgur.com/s9GmfSS.jpg",
    "Annoying Childhood Friend": "http://i.imgur.com/27VCyQw.jpg",
    "Annoying Facebook Girl": "http://i.imgur.com/ccczyGt.jpg",
    "Anti-Joke Chicken (Rooster)": "http://i.imgur.com/KOsW0jh.jpg",
    "Awkward Penguin": "http://i.imgur.com/ez1tQrq.jpg",
    "Back In My Day Grandpa": "http://i.imgur.com/zuJSZp8.jpg",
    "Bad Advice Mallard": "http://i.imgur.com/QEPvL2B.jpg",
    "Bad Luck Brian": "http://i.imgur.com/sRW8BiO.jpg",
    "Bear Grylls": "http://i.imgur.com/6Spqy1D.jpg",
    "Brace Yourself": "http://i.imgur.com/NhIq0LY.jpg",
    "Captain Obvious": "http://i.imgur.com/DmUcxBu.jpg",
    "Chemistry Cat": "http://i.imgur.com/8agP4Xe.jpg",
    "College Freshman": "http://i.imgur.com/2Ynyv9t.jpg",
    "College Liberal": "http://i.imgur.com/OWfvSFE.jpg",
    "Condescending Wonka": "http://i.imgur.com/D0e5fgL.jpg",
    "Confession Bear": "http://i.imgur.com/kH1SKhp.jpg",
    "Confession Kid": "http://i.imgur.com/jhOxR12.jpg",
    "Confused Gandalf": "http://i.imgur.com/iIb5SEo.jpg",
    "Conspiracy Keanu": "http://i.imgur.com/pFyk3J7.jpg",
    "Courage Wolf": "http://i.imgur.com/H5qoXFb.jpg",
    "Dating Site Murderer": "http://i.imgur.com/jffNNql.jpg",
    "Depression Dog": "http://i.imgur.com/wgad6P8.jpg",
    "Drunk Baby": "http://i.imgur.com/QvZdbRE.jpg",
    "English Motherfucker": "http://i.imgur.com/sJThEC0.jpg",
    "Evil Plotting Raccoon": "http://i.imgur.com/xMslWFf.jpg",
    "First Day On The Internet Kid": "http://i.imgur.com/TWfdmVu.jpg",
    "First World Cat Problems": "http://i.imgur.com/0vR5Slq.jpg",
    "First World Problem": "http://i.imgur.com/ATcIl08.jpg",
    "Forever Resentful Mother": "http://i.imgur.com/pIrdwo2.jpg",
    "Foul Bachelor Frog": "http://i.imgur.com/JUFmusm.jpg",
    "Foul Bachelorette Frog": "http://i.imgur.com/dYf971U.jpg",
    "Friendzone Fiona": "http://i.imgur.com/Qu1eedL.jpg",
    "Frustrated Farnsworth": "http://i.imgur.com/U3SElKP.jpg",
    "Fuck Me, Right?": "http://i.imgur.com/J9gfxsx.jpg",
    "Gangster Baby": "http://i.imgur.com/C3XhI56.jpg",
    "Good Girl Gina": "http://i.imgur.com/qK6lYr2.jpg",
    "Good Guy Greg": "http://i.imgur.com/UXMPoKN.jpg",
    "Grandma Finds The Internet": "http://i.imgur.com/xPfGYqu.jpg",
    "Grinds My Gears": "http://i.imgur.com/t4JqU1j.jpg",
    "Grumpy Cat (Tard)": "http://i.imgur.com/dU5CDxN.jpg",
    "High Expectations Asian Father": "http://i.imgur.com/7QeB9LI.jpg",
    "Hipster Barista": "http://i.imgur.com/AbWxdy2.jpg",
    "Horrifying House Guest": "http://i.imgur.com/DxmoFp1.jpg",
    "I Dare You Samuel Jackson": "http://i.imgur.com/UQtpdqj.jpg",
    "I Should Buy A Boat": "http://i.imgur.com/XqlqPxn.jpg",
    "I Too Like To Live Dangerously": "http://i.imgur.com/qF70EL9.jpg",
    "Idiot Nerd Girl": "http://i.imgur.com/8hYPYwd.jpg",
    "Insanity Wolf": "http://i.imgur.com/GOOdg3k.jpg",
    "Joker Mind Loss": "http://i.imgur.com/qQIRaOD.jpg",
    "Joseph Ducreux": "http://i.imgur.com/QL7TyR9.jpg",
    "Lame Joke Eel": "http://i.imgur.com/oQXw3jF.jpg",
    "Lame Pun Raccoon": "http://i.imgur.com/nvALRK3.jpg",
    "Lazy College Senior": "http://i.imgur.com/PpkVfzz.jpg",
    "Mad Karma": "http://i.imgur.com/G0QMPum.jpg",
    "Masturbating Spidey": "http://i.imgur.com/dZ7AB4c.jpg",
    "Matrix Morpheus": "http://i.imgur.com/8Yrw6cZ.jpg",
    "Mayonnaise Patrick": "http://i.imgur.com/5jE0Y7f.jpg",
    "Musically Oblivious 8th Grader": "http://i.imgur.com/l5YHN5D.jpg",
    "Not Sure Fry": "http://i.imgur.com/7rFgBB1.jpg",
    "Oblivious Suburban Mom": "http://i.imgur.com/Y7o7UJs.jpg",
    "One Does Not Simply": "http://i.imgur.com/7LrwR1Y.jpg",
    "Overly Attached Girlfriend": "http://i.imgur.com/5blLJLR.jpg",
    "Overly Manly Man": "http://i.imgur.com/dOSn9Na.jpg",
    "Paranoid Parrot": "http://i.imgur.com/KooYHdg.jpg",
    "Pepperidge Farm Remembers": "http://i.imgur.com/uFde4v5.jpg",
    "Philosoraptor": "http://i.imgur.com/eERhI5h.jpg",
    "Priority Peter": "http://i.imgur.com/BBEFk0e.jpg",
    "Rasta Science Teacher": "http://i.imgur.com/Js6Ai5T.jpg",
    "Redditor's Wife": "http://i.imgur.com/d1XfJeD.jpg",
    "Revenge Band Kid": "http://i.imgur.com/dlvmaRI.jpg",
    "Schrute Facts": "http://i.imgur.com/UxcvPwT.jpg",
    "Scumbag Brain": "http://i.imgur.com/OZhhZdS.jpg",
    "Scumbag Stacy": "http://i.imgur.com/Qqz1axp.jpg",
    "Scumbag Steve": "http://i.imgur.com/Rfvoc0Y.jpg",
    "Sexually Oblivious Rhino": "http://i.imgur.com/RoaNuEC.jpg",
    "Sheltering Suburban Mom": "http://i.imgur.com/vMkSofv.jpg",
    "Shut Up And Take My Money": "http://i.imgur.com/uWe0rtQ.jpg",
    "Skeptical Third World Kid": "http://i.imgur.com/uwAusxV.jpg",
    "Smug Spongebob": "http://i.imgur.com/OTTRjrv.jpg",
    "Socially Awesome Penguin": "http://i.imgur.com/S6WgQW7.jpg",
    "Success Kid": "http://i.imgur.com/ZibijBz.jpg",
    "Successful Black Man": "http://i.imgur.com/ogIm0cy.jpg",
    "Sudden Clarity Clarence": "http://i.imgur.com/N3Xmfbe.jpg",
    "Tech Impaired Duck": "http://i.imgur.com/riz28ci.jpg",
    "The Most Interesting Man In The World": "http://i.imgur.com/MGv15MH.jpg",
    "The Rent Is Too High": "http://i.imgur.com/r5WLktQ.jpg",
    "Tough Spongebob": "http://i.imgur.com/2w0F1HX.jpg",
    "Unhelpful Highschool Teacher": "http://i.imgur.com/ohbGhuD.jpg",
    "Vengeance Dad": "http://i.imgur.com/0nUStsa.jpg",
    "What Year Is It?": "http://i.imgur.com/fj79hQS.jpg",
    "X, X Everywhere": "http://i.imgur.com/GGy94Gt.jpg",
    "Yeah That'd Be Great": "http://i.imgur.com/nz9M2pl.jpg",
    "Yo Dawg Xzibit": "http://i.imgur.com/XOyGqF2.jpg",
    "You're Bad And You Should Feel Bad": "http://i.imgur.com/YsabGnQ.jpg",
    "You're Gonna Have A Bad Time": "http://i.imgur.com/2tNR7P7.jpg",
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
