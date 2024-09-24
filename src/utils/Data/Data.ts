export const liveStatusArr = [
  { name: "dead", id: 1 },
  { name: "alive", id: 2 },
  { name: "unknown", id: 3 },
];

export const gendersArr = [
  { name: "male", id: 1 },
  { name: "female", id: 2 },
  { name: "unknown", id: 3 },
];

export const rickAndMortyCharacters = [
  {
    id: 1,
    characterArr: [
      {
        name: "Jerry",
        filterName: "jerry",
        last_name: "Smith",
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Squanchy",
        filterName: "squanchy",
        last_name: "",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADsQAAIBAwIDBgIHBQkAAAAAAAECAwAEEQUhEjFBBhMiUWFxQoEUIzKRobHhM1KywfEHFSQ1YnJz0dL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgYB/8QALxEAAgICAQIFAgUEAwAAAAAAAAECAwQRIRIxBRMiQVEykWFxgaHBFLHR8BUjM//aAAwDAQACEQMRAD8A+40AoBQCgFADyoCj1Ce5huypldVbdApwMf1rz/iN+TTbxL0vsXceEJw7cmItTli3fMiAbjr8q5x/FJqWrOUfZ4ya9JdRSLLGskZDIwyCOor0KaktoonuvoFAKAUAoBQCgFAKAUAoBQFXr4VreIEDPHt91Y/jP/il77LWJ9bZDazzZpImS7cxnmKzf6TePGce5OrtWNPsSOz8x4ZrYnPdniU+hzkff+davhV/XW4P2IMqCjLqXuW+a1SqYDqdgQTQHqgFAKAUAoBQCgI95ci2i4+EsScAVXyr/Ir69bO64dctFRLq1wxxHwL5YGc1hS8VypvUEl+5dWLWvqPK6texnMkfEv8AqXFfY+J5cH647X2PrxapfSzbdXkV7FFJGd0YhlPNTtUudkQyKYWR+SOuuVcpRZYZUAcGAOYxV56X09iv78lPHcw6VPe3Mv2FRVVRzZiThR6mqmJKGPK2T7InsUrFFe5hbi91JC2AI/LOF9vWqk7srM3p6iTdFVPflkSdHtmPevGcb4T4RVK2l0tLfJPCan7F/oRnbTo3uM5cllBOfCeX4V6nBVioirO5l3OLm+ksatkQoBQCgFAKA1XEKXELRSrxKwwRnFcyhGa1JH1NrlHMPYnTb7xlnJP1bt8S9R7/ANa81k48sS1SXY0a7FbDp9yz7+IxZUqwPSrM76+ja5IVXLemVUgRZAyYDg596w3LUupF9b1pk2HUOCAB0LEcsGtCrxBQgoyW9FaWPuXDKbULeO+uRMUJfkgziqk73Y2/ksQrUFyW0c1zbWZNxDwqo23x99Xq7bK6m5x7Faca5z1FmLCxkv5RNMuLfOTxD9qf/P51NhYUrrPPt7fBzdcoR8uJ0gr0JQM0AoBQCgFAKAUBqubeK4iaOZOJT+HqPI1xZXGyPTJbR9i2ntFCbfuZpYY24jxBVZxyG38815i/HjXc64M0YzcoKUjzrAvNNsYm0fSBqk7yKsivOsfCp5tk/kKv04WPFcr7laV1knvYv4oopMQjAO+ByrJzKoRl6EW8ecpL1HrSnhikZ5WVDjwsxxXeDKuEm58HzJU5JJFVq9xb2M1/qB1SedblEWKzL8UUZUYyoxtnqc1etzKppRi0QRos7nb4r0BTM0AoBQCgFAKAUAoDB5UBQ3m13OOW+fwrzObtZEv99jQp5rRrzq9wAsIiSPpIeZrlf1ly9PC+T7rHg/Vyz3baRLHGe9lDOd2YknJr7Hw6zXqf8nx5Md8I1CyWWR4O+iZsZK5Ndy8JuUep9mcrOrb0u6KvWOy8s6M4ugxCkBGXYe1RrAcPcleV1cNHZ2cpntIJWGC8asR5ZFeni9rZmvubq+nwUAoBQCgFAKAUANAUeqpw6knlKoH44P8AKsTxCreRH4Zcol/1v8Cv7Q9pZND0qC4S1E808/cxKxaIDws2WBXI2U7YO5G/Wr7SX5EMIOyWkQNN7avf2zvcafNFwOA7WrCXYgkbHhbJAPIHGK59HydWVSg9MhydtNChuGka4mKtBCG7q1nLcXExkw3CDyC7nGfvqaUpOPTvgijQ+rajyabzt1P/AHlZaclhhpZ0gmadwr5bhHGqqWAHi5Fs7Y251V8uMm9MmUJKPVo+g6P/AJTZbY/w6fwir9f0orvuTK7PgoBQCgFAKAUAoBQFdrVo9zbhoADNGcqM4z6VTzaHbBOPdEtM1B89mc7qWnRa9pctuwkjuhMJlEzthJFGOHfPCpXK7D4sjeoq7epaktfJIk4SUonE3Nk8N3cW13ENLiVCU+lMEEr4wqq5PCxJONm2Ga+yhJLfct/1Neto5W7uraFnWS4hBQ4P1o6fOi5JuuOt7Op7Ldm7/UtVgvrrPAio0JbOWbhGD7Ltv1IwM10ov6UuSlbbFrUex9ojRY41RBhVAAHkKvFI9UAoBQCgFAKAUAoAdqAq9R1Ao5ht/t/E/wC7+tY+f4h5b8ur6vf8C1TR1Lql2OWa2l+lSzWUjrMx8bls8R6VhwvtjLe9s0HGDjpo5zSP7SdSbUbyxk7OanM1vI0Za0jLkEHHjU4C9OtejVbgk+tf2MxyUn2NGg9qr6TWJLG2g1eaXhzLLqEC24h2OMKMksTgbkDmRtXzJm66urq/In6oWySjBR+50ela/cWN2bmZ2ntpsd6oGSB0Yf8AVZuLnzqsas7Mluxoyj6e59At5o54UlhcPG6hlZTsRXooyUltdjMa1wzZXQFAKAUAoBQCgFAQtTu/o0OFP1r7L6etUc/KWPXx3fYmpq8yX4FDbxvcTrAmcufE3kOprzmLTLIs6fnuaNslXHZJSNI7zgRcKJcAexqeyCWTpLjZEm/K2yxkQPz5CtFxTKiZT63ZiWycDOV8S1WyK91t/BPVP1FNf2ZWO3vFA7m8Gf8AZJ8S+xOSKiy8dqKvXaX7P3JqbOXW/Ym9ltUawuvoFwSbaU5hY/Ax6exP4+9WfDM3T8qf6EeVRx1xO1G9bxnigFAKAUAoBQHl24VJr5J6WwUup2sjO1xx8eOh+Eeled8QonOTt3v8C/j2xS6NEnRbXurfvnXDy778wvQfzrS8OxvJq2+7IMi3rnpdkQlIF83/ADN/FWVZxlP8/wCSyuaf0LLFaJUI16mYXBPwmo5x9LR3F6Zp0a1ivuzcdvMOJH4hnqPEcEeoq3i1qzFUZe/+TiyTja2itg0lnmeC8C/V7Nj4vUehrE/4+UbWpdv7l55KcNpHQ6dKysbZ2JKjKk8+GvQY9nUtP2M6a09k6rJwKAUAoBQCgI95KsKq7kBc8zUNz1E6j3IyA3jKOFhEDkkj7XpVaup2Pcux2309iw6VfIjn7xe61GTbmQ4+f615vOj0ZLf6mhQ+qrRZKVKgg5Bq8mu6K7T2R72ZYomZiMAVHZNRW2dQi2+DmdMOt2cL3unxCS0wS0bEYOCckAnpj0+dWcNzVClE6n5bs6ZGpO2S3Eqi8gWKQH9pEd1HqDzGfWoHmKzicfsaMvCnBbrl9zq9M7y6eG7DL3YU4YAgtt5GrtFbT6t8GRb6W4st6tkIoBQCgFAKAxigGKAzQFXrcK90s44Q6eHccwTyrM8UqjKrr90WMaTU+n5KeNrrvUhs2HG+cBz4R1yfKsXEldOxVwZetVai5SRme2ubeUNf4kJ+y4+z7AdDXWbj3Uy6pva+TmmyE1qPBJsr6JEazugDCykLtnbqtXMDPUYuu3svf+P8EV+O9qUO5y6dmLWO+iuO/URJKrYkj5DPWoasimVq9ls0Z5djqaa50fRLW3S2hWKMYVeQxjFejjHS0YEpOT2zdXR8FAKAUAoBQCgFAKAodcui8wgQ7R7t7n9Pzrz3i+TuSpXtyzQw6+OtkG2ZonEiHDjk1ZNN06pdUOGWbYKa0yyS4Op6bdJjiki2BA+0cZHzr0ELZZuJNNcr9yg4qi1P2KCKVZcNkY8680108M1+NcGi8llupEsLYcU0+UA8vMn0HOpsemV0lBe5DZKMIts79NlA57V7VGIZr6BQCgFAKAUAoBQCgOb1azukvHmigeZJDnKDPDt1HOvPeI4F07nOC2maGPkRjDpkRI7LU7huGOAwp+/LsB8uZ+6oKvC75PTWkdzyq125Ol0+ySythChJPNnPNm6k16KimNMFCJnzm5vbKi+7OGS5klsrhYe8JJRkyAfTcVn5PhULZ9cXonry5Qj0sl6LokGmcb8RluJB45WGNvIDoKt4uJDHXHL+SK26Vj5LarZEKAUAoD//2Q==",
      },
      {
        name: "Beth",
        filterName: "beth",
        last_name: "Smith",
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Mr. Goldenfeld",
        filterName: "mr. goldenfeld",
        last_name: "",
        img: "data:image/jpeg;base64,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",
      },
    ],
  },
  {
    id: 2,
    characterArr: [
      {
        name: "Jesssica",
        filterName: "jesssica",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRC5UT4r2W8jE2DBwgKGnvwIXVjMMCWN5g07N&s=0",
      },
      {
        name: "Krombopulos",
        filterName: "krombopulos",
        last_name: "Micheal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWxkuSPFOW8cXUgUqO2h9Bc9rNGsrlRHo40ZP6wWU3frknwdsNnuU&s=0",
      },
      {
        name: "Evil Morthy",
        filterName: "evil morthy",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNVl7mZ-0_DlRFgGdPmSQdRltb5OvvpYjBjR5LmJoX8weOV76lKf3&s=0",
      },
      {
        name: "Diane",
        filterName: "diane",
        last_name: "Sanchez",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5KXIc6eGL8igrNomXzjbvbS7d4g8v_dz3PZGdEFQcD18Ggj-qS1A&s=0",
      },
    ],
  },
  {
    id: 3,
    characterArr: [
      {
        name: "Zeep",
        filterName: "zeep",
        last_name: "Xanflorp",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVDhpiZ5L0XgtEx7zyn4cQ7a1xIcvkdkakorIVwIftfAPSwbHIGfV&s=0",
      },
      {
        name: "Mr. Beauregard",
        filterName: "mr. beauregard",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-rlwL1ZFTWC9kuF89SIwzfddZgTxy5Cyu5gORgEoRzHGhbDPx8mr&s=0",
      },
      {
        name: "The President",
        filterName: "the president",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfYf4sL2cUus5K110fWrDQLE7HFVwrETAv7KTw4RaGfrFW89OhWpI&s=0",
      },
      {
        name: "The Devil",
        filterName: "the devil",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RAj5mzDAw2yhtQCIIiKqwq5jrc6VlNpl-_7EciMTMkgcAPXnoRk-&s=0",
      },
    ],
  },
  {
    id: 4,
    characterArr: [
      {
        name: "Cornvelious",
        filterName: "cornvelious",
        last_name: "Daniel",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT31iCxzzlDrfr5XJ22p5zqA_UjuGtRN4X08VOk&s=0",
      },
      {
        name: "Dr. Wong",
        filterName: "dr. wong",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rpCXrzQPv_9yzziB973FTDTTfMu7A-UBIDMxcH6BJl48nfWM6ZGh&s=0",
      },
      {
        name: "Leonard",
        filterName: "leonard",
        last_name: "Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSncESxukUEP9Vg7SJqaM1jLaNHwvsLT4Lr0U1csHWKzr-jW8et3F1a&s=0",
      },
      {
        name: "Toby",
        filterName: "toby",
        last_name: "Matthews",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXVfy1oT0W2K0IenFzPQBWGVQpWNp0mG7x3swX_0TF3zawVM-CiYF&s=0",
      },
    ],
  },
  {
    id: 5,
    characterArr: [
      {
        name: "Snuffles",
        filterName: "snuffles",
        last_name: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPycqf4-By4PsmGBE6rCExfNNKLhHVq8oqHXxF75KgiO26Hn_jERjN&s=0",
      },
      {
        name: "Million",
        filterName: "million",
        last_name: "Ants",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIEBR5IT-am-VASs_XKRh-DJdf4FDf6JkyqiAsSO90Il2ATzconhd&s=0",
      },
      {
        name: "Scarry",
        filterName: "scarry",
        last_name: "Terry",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9BhALkvebkTD5qxDve8gJxyVHs3J0yRp23e605uS-hs0gZ5dUokA&s=0",
      },
      {
        name: "Joyce",
        filterName: "joyce",
        last_name: "Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4IxDEDILLSr3-bZ2n6Vi5gr3Xfbd13atxqTnfyEX2r8EhKTfRamy&s=0",
      },
    ],
  },
  {
    id: 6,
    characterArr: [
      {
        name: "Agency",
        filterName: "agency",
        last_name: "Director",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2Mj1GSUz3lhd0Dgi5rJJrqxp8MlnKfyXvBc_Hcniiyi0ihq4DFhz&s=0",
      },
      {
        name: "Scroopy",
        filterName: "scroopy",
        last_name: "Noopers",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7Be-J72Q3SJoVLt7CcreOIYMRw6ZmxpI_Wtmd1_et28HFWS0PayP&s=0",
      },
      {
        name: "Tinkles",
        filterName: "tinkles",
        last_name: " ",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5nTb8bRZAmLgvSDG7tUjA-KTiaJY-iVt5UlDySRQjy678OjLDWDo&s=0",
      },
      {
        name: "Frank",
        filterName: "frank",
        last_name: "Palicky",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOSnpU2JSy-apCn_9QhIWKrKREfHYnMMOgXhO7GFudz4zvalavkCy&s=0",
      },
    ],
  },
];
