module.exports = {
  docs: {
    Presentation: [
      "TidalCycles",
      "community",
      "showcase",
      {
        "Install Tidal": [
          "getting-started/linux_install",
          "getting-started/macos_install",
          "getting-started/windows_install",
          "getting-started/tidal_start",
        ],
        "Upgrade & Downgrade": [
          "getting-started/upgrading",
          "getting-started/downgrading",
          "getting-started/uninstalling",
        ],
        Troubleshoot: [
          "troubleshoot/troubleshoot_linux",
          "troubleshoot/troubleshoot_macos",
          "troubleshoot/troubleshoot_windows",
        ],
        "Get a Text Editor": [
          "getting-started/editor/Atom",
          "getting-started/editor/Pulsar",
          "getting-started/editor/Vim",
          "getting-started/editor/Emacs",
          "getting-started/editor/VS_Code",
          "getting-started/editor/Sublime_Text",
        ],
      },
    ],
    Configuration: [
      {
        "Tidal Configuration": [
          "configuration/multiuser-tidal",
          "configuration/boot-tidal",
        ],
        "Tidal Tools": [
          "configuration/tidal-vis",
          "configuration/tidal-listener",
        ],

        "SuperDirt Configuration": [
          "configuration/adding_effects",
          "configuration/adding_global_effects",
          "configuration/adding_synthesizers",
        ],
        "I/O (MIDI, OSC)": [
          "configuration/MIDIOSC/midi",
          "configuration/MIDIOSC/osc",
          "configuration/MIDIOSC/connecting_to_a_daw",
          "configuration/MIDIOSC/control-voltage",
        ],
        "Audio samples": [
          "configuration/AudioSamples/audiosamples",
          "configuration/AudioSamples/default_library",
          "configuration/AudioSamples/lazy_loading",
          "configuration/AudioSamples/find_samples",
        ],
        "Sound and audio": ["configuration/AudioConfig/audio_outputs"],
      },
    ],
    "How-tos": [
      "patternlib/howtos/buildarpeggios",
      "patternlib/howtos/buildrhythms",
      "patternlib/howtos/playchords",
      "patternlib/howtos/startpattern",
    ],
    Tutorials: [
      "patternlib/tutorials/workshop",
      "patternlib/tutorials/course1",
      "patternlib/tutorials/course2",
    ],
    "How does Tidal Work?": [
      {
        Haskell: [
          "innards/haskell",
          "innards/meaning_of_dollar",
          "innards/meaning_of_dot",
          "innards/type_signatures",
          "innards/contributing_test",
        ],
        Concept: ["innards/what_is_a_pattern"],
      },
    ],
    "Around Tidal": [
      "around_tidal/typing_fast_and_well",
      "around_tidal/toplap_manifesto",
      "around_tidal/tidal_history",
      "around_tidal/changelog",
    ],
  },
  advanced: {
    "Understanding innards": [
      "advanced/understanding-innards/What_is_a_pattern",
      "advanced/understanding-innards/Type_signatures",
      "advanced/understanding-innards/Haskell_resources",
    ],
  },
  reference: {
    Basics: [
      "reference/cycles",
      "reference/patterns",
      "reference/pattern_structure",
      "reference/mini_notation",
      "reference/oscillators",
      "reference/synthesizers",
      "reference/audio_effects",
      "reference/controls",
      "reference/tempo",
      "reference/transitions",
      "reference/state_values",
    ],
    Reference: [
      "reference/even-more",
      "reference/concatenation",
      "reference/accumulation",
      "reference/alteration",
      "reference/performance",
      "reference/conditions",
      "reference/time",
      "reference/harmony_melody",
      "reference/transitions",
      "reference/samplers",
      "reference/sampling",
      "reference/randomness",
      "reference/composition",
      "reference/mi-ugens",
      "reference/control_busses",
    ],
  },
  library: {
    Introduction: [
      "library/introduction"
    ]
  },
  community: [
    "resource/Community",
    "resource/Friends_and_relations",
    "resource/Contributing_tests",
    "resource/Academic_publications",
    "resource/History_of_Tidal",
  ],
};
