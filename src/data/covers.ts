// 대표 프로젝트 커버 이미지의 로컬 저장본입니다.
// 예전에는 raw.githubusercontent.com URL을 썼지만, 일부 네트워크에서 해당 도메인이
// 차단되거나 GitHub 호출이 실패하면 커버가 깨져 보여서 전부 번들에 포함시켰습니다.
import checkmiteV1 from '../assets/checkmitev1-cover.png';
import jbig from '../assets/jbig-cover.png';
import eduMsa from '../assets/edu-msa-cover.png';
import go from '../assets/go-cover.png';
import msaRestaurant from '../assets/msa-restaurant-cover.png';
import byTomorrow from '../assets/by-tomorrow-cover.png';
import glml from '../assets/glml-cover.png';
import gmg from '../assets/gmg-cover.png';
import ragAgent from '../assets/rag-agent-cover.png';
import mcpShopbot from '../assets/mcp-shopbot-cover.png';
import ovClonecoding from '../assets/ov-clonecoding-cover.png';
import autoPpt from '../assets/auto-ppt-cover.png';

export const localCovers: Record<string, string> = {
  checkmiteV1,
  jbig,
  'edu-msa': eduMsa,
  GO: go,
  'MSA-restaurant': msaRestaurant,
  'By-Tomorrow': byTomorrow,
  GLML: glml,
  GMG: gmg,
  'RAG-agent': ragAgent,
  'MCP-shopbot': mcpShopbot,
  'OV-clonecoding': ovClonecoding,
  'Auto-PPT': autoPpt,
};
