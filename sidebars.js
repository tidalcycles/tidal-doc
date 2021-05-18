module.exports = {
  docs: {
    Intro: ['TidalCycles', 'community', 'doc1'],
    "Getting Started": [
      {
        'Installation': [
          'getting-started/installation',
          'getting-started/Linux_installation',
          'getting-started/MacOS_automated_installation',
          'getting-started/MacOS_installation',
          'getting-started/Windows_choco_install',
          'getting-started/Windows_installation',
        ],
        'Editor': [
          'getting-started/editor/List_of_tidal_editors',
          'getting-started/editor/Atom',
          'getting-started/editor/Vim',
          'getting-started/editor/Emacs',
          'getting-started/editor/VS_Code',
          'getting-started/editor/Sublime_Text',
        ]
      },
      'getting-started/upgrading',
      'getting-started/start-tidalcycles-and-superdirt-for-the-first-time',
      'getting-started/tutorial'
    ],
    "Configuration": [
      'configuration/Troubleshooting_a_Tidal_install',
      'configuration/Configuration',
      'configuration/Reverting_to_an_earlier_version',
      'configuration/Custom_Samples',
      'configuration/Multi-user_Tidal',
      'configuration/Custom_OSC',
      'configuration/MIDI',
      'configuration/Separate_audio_outputs',
      'configuration/Multichannel_sound',
    ],
    "Working With Patterns": [
      'working-with-patterns/Interaction',
      'working-with-patterns/Controller_Input',
      'working-with-patterns/Understanding_the_$',
      'working-with-patterns/Combining_pattern_structure',
      'working-with-patterns/Building_up_patterns',
    ],
    "Tidal workshop worksheet": [
      'Tidal_workshop_worksheet/Introduction',
      'Tidal_workshop_worksheet/Basic_Patterns',
      'Tidal_workshop_worksheet/Transforming_Patterns',
      'Tidal_workshop_worksheet/Different_Kinds_of_Pattern',
      'Tidal_workshop_worksheet/Randomness',
      'Tidal_workshop_worksheet/Manipulating_samples',
    ]
  },
  advanced: {
    "Understanding innards": [
      'advanced/understanding-innards/What_is_a_pattern',
      'advanced/understanding-innards/Type_signatures',
      'advanced/understanding-innards/Haskell_resources',
    ]
  },
  api: [
    'api/Functions',
    'api/All_the_functions',
    'api/All_the_controls',
    'api/All_effects_and_synths',
    {
      'Transitions': [
        'api/transitions/Category_Transitions',
        'api/transitions/Quick_example_for_transition',
        {
          'List of Transitions': [
            'api/transitions/List_of_Transitions',
            'api/transitions/anticipate',
            'api/transitions/anticipateIn',
            'api/transitions/clutch',
            'api/transitions/clutchIn',
            'api/transitions/histpan',
            'api/transitions/interpolate',
            'api/transitions/interpolateIn',
            'api/transitions/jump',
            'api/transitions/jumpIn',
            'api/transitions/jumpIn\'',
            'api/transitions/jumpMod',
            'api/transitions/histpan',
            'api/transitions/wait',
            'api/transitions/waitT',
            'api/transitions/wash',
            'api/transitions/washIn',
            'api/transitions/xfade',
            'api/transitions/xfadeIn',
          ]
        }
      ]
    }
  ],
  community: [
    'resource/Community',
    'resource/Friends_and_relations',
    'resource/Contributing_tests',
    'resource/Academic_publications',
    'resource/History_of_Tidal',
  ]
}
