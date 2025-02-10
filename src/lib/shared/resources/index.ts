import type { ModelId } from "./models";
import type { VoiceId } from "./voices";
import { getFileFromUrl } from "./helpers";

export * from "./models";
export * from "./voices";
export * from "./langs";

const downloadUrl =
  "https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/1939ad2a8e416c0acfeecc08a694d14ef25f2231";

/**
 * Fetches the model with the given id.
 *
 * @param id The id of the model
 */
export async function getModel(id: ModelId): Promise<ArrayBuffer> {
  const url = `${downloadUrl}/onnx/${id}.onnx`;
  return await getFileFromUrl(url);
}

/**
 * Fetches the voice file with the given id.
 *
 * @param id The id of the voice file
 */
export async function getVoiceFile(id: VoiceId): Promise<ArrayBuffer> {
  const url = `${downloadUrl}/voices/${id}.bin`;
  return await getFileFromUrl(url);
}

/**
 * same as getVoiceFile but reshapes the data into a 3D array with
 * this shape: [number of chunks, 1, 256]
 *
 * This shape is required by the model for inference.
 *
 * @param id The id of the voice file
 */
export async function getShapedVoiceFile(id: VoiceId): Promise<number[][][]> {
  const voice = await getVoiceFile(id);
  const voiceArray = new Float32Array(voice);
  const voiceArrayLen = voiceArray.length;

  const reshaped: number[][][] = [];
  for (let from = 0; from < voiceArray.length; from += 256) {
    const to = Math.min(from + 256, voiceArrayLen);
    const chunk = Array.from(voiceArray.slice(from, to));
    reshaped.push([chunk]);
  }

  return reshaped;
}
