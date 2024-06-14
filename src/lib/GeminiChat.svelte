<script>
  import Modal from './Modal.svelte';

  import {HumanMessage} from '@langchain/core/messages';
  import {ChatGoogleGenerativeAI} from '@langchain/google-genai';
  import {HarmBlockThreshold, HarmCategory} from '@google/generative-ai';
  // @ts-ignore
  import MarkdownIt from 'markdown-it';

  let showModal = false;

  let output = ""
  let promptInput = ""
  
  const submitChat = async () => {
    let promptText = promptInput

    const contents = [
      new HumanMessage({
        content: [
          {
            type: 'text',
            text: promptText,
          },
        ],
      }),
    ];

    // Call the gemini-pro model, and get a stream of results
    const apiKey = process.env.GOOGLE_API_KEY;
    const chatAI = new ChatGoogleGenerativeAI({
      modelName: 'gemini-pro',
      apiKey,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });
    

        // Multi-modal streaming
    const streamRes = await chatAI.stream(contents);

    // Read from the stream and interpret the output as markdown
    const buffer = [];
    const md = new MarkdownIt();

    let outputYou = md.render(`**You**: ${promptText}`) + "\n" + md.render(`**Chat**: `);
    output = outputYou + `Generating...`;

    for await (const chunk of streamRes) {
        buffer.push(chunk.content);
        output = outputYou + md.render(buffer.join(''));
    }

    promptInput = ''
  }

</script>

<button on:click={() => (showModal = true)}> Chat with me !! </button>

<Modal bind:showModal>
<h1>Baking with the Gemini API</h1>
  <form on:submit|preventDefault={ submitChat }>
    <div class="prompt-box">
    <label>
        <input bind:value={promptInput} placeholder="Enter instructions here" type="text" />
    </label>
    <button type="submit" on:click={submitChat}>Go</button>
    </div>
  </form>
  <p class="output">{@html output || 'Results will appear here'}</p>
</Modal>

<style>
    
    * {
      outline-color: var(--accent-color);
    }
    
    h1 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0 auto;
      font-size: 24px;
    }
    
    h1::before {
      content: '';
      display: inline-block;
      background: url(gemini.svg);
      width: 40px;
      height: 40px;
      background-size: cover;
    }
    
    form {
      margin: 0;
    }
    
    .prompt-box {
      margin: 24px 0;
      width: 100%;
      display: flex;
      gap: 8px;
      align-items: flex-end;
    }

    .output {
      text-align: left;
    }
    
    label {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 8px;
      font-size: 12px;
    }
    
    input,
    button {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 12px 16px;
      font-family: unset;
      font-size: 16px;
    }
    
    button {
      border-color: var(--accent-color);
      background-color: var(--accent-color);
      color: white;
      font-weight: bold;
      cursor: pointer;
      opacity: 1;
    }
    
    button:focus-visible {
      outline: 2px solid white;
      outline-offset: -4px;
    }
    
    button:hover {
      opacity: 0.95;
    }
    </style>