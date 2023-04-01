import math


def is_candidate(h: str) -> bool:
    bad = "24789"
    for c in h:
        if c in bad:
            return False
    return True


def hexspeak_format(h: str) -> str:
    return (
        h.upper()
        .replace("0", "O")
        .replace("1", "I")
        .replace("3", "E")
        .replace("5", "S")
        .replace("6", "G")
    )


def word_to_hex(w: str) -> str:
    return (
        w.lower()
        .replace("o", "0")
        .replace("i", "1")
        .replace("s", "5")
        .replace("g", "6")
    )


def is_perfect_square(n: int) -> bool:
    return int(math.sqrt(n) + 0.5) ** 2 == n


def print_hex_squares():
    num_candidates = 0
    i = 1
    while num_candidates != 300:
        square = i**2
        hex_square = hex(square)[2:]
        if is_candidate(hex_square):
            print(f"{i}\t{hex_square}\t{hexspeak_format(hex_square)}")
            num_candidates += 1
        i += 1


def check_word(word: str) -> bool:
    hex = word_to_hex(word)
    print(hex)
    if is_perfect_square(int(hex, 16)):
        return True
    if "e" in hex:
        hex = hex.replace("e", "3")
        print(hex)
        if is_perfect_square(int(hex, 16)):
            return True
    return False


words = [
    "ASCII",
    "DECEASED",
    "ADIDAS",
    "BEDSIDE",
    "CICADA",
    "CICADAS",
    "COCOA",
    "COFFEE",
    "COFFEES",
    "CODIFIED",
    "DEBASE",
    "DEBASED",
    "BASED",
    "DEBIAS",
    "DEBIASED",
    "BODIES",
    "BABIES",
    "DIODE",
    "DIODES",
    "BASIC",
    "BASICS",
    "SEABASS",
    "IDEA",
    "IDEAS",
    "ACID",
    "ACIDIC",
    "SCOFF",
    "SCOFFED",
    "FECES",
    "DECIDE",
    "DECIDES",
    "DEICIDE",
    "SECEDE",
    "DISEASE",
    "DISEASES",
    "DISEASED",
    "DICED",
    "DICE",
    "SAFE",
    "SAFES",
    "FACE",
    "FACES",
    "DEFACE",
    "DEFACES",
]

for word in words:
    for i in range(len(word)):
        one_letter_off = word[:i] + word[i + 1 :]
        if check_word(one_letter_off):
            print(word, one_letter_off)

exact_matches = [
    "ADDESS",
    "ADDESSED",
    "SOCCE",
    "DEFEC",
    "DEFECED",
    "DEFEA",
    "DEFEAED",
    "FOCEFEED",
    "AFFOD",
    "AFFODED",
    "DAABASE",
    "ACADE",
    "SAFAI",
    "DIDACIC",
    "AABIC",
    "EDI",
    "EDIED",
    "EFFEC",
    "AFFEC",
    "AFFECED",
    "SACIFICE",
    "BISEC",
    "DISEC",
    "ACCOS",
    "ACCOSED",
    "AFAID",
    "CISIS",
    "ADIO",
    "SODID",
    "FEID",
    "DOID",
    "DOIDS",
    "ABBI",
    "ABBIS",
    "ASSOCIAE",
    "ASSOCIAED",
    "EASIES",
]

for exact in exact_matches:
    if check_word(exact):
        print(exact)
